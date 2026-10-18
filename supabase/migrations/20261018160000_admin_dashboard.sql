begin;

-- The owner account already exists. Do not create or reset auth credentials in SQL.
do $$
begin
  if not exists (select 1 from auth.users where lower(email) = 'admin@intorza.com' and email_confirmed_at is not null) then
    raise exception 'The confirmed owner account admin@intorza.com must exist first';
  end if;
end;
$$;

insert into public.user_roles (user_id, role)
select id, 'admin'::public.app_role from auth.users where lower(email) = 'admin@intorza.com'
on conflict (user_id, role) do nothing;

create table if not exists public.admin_audit_log (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references auth.users(id) on delete set null,
  action text not null,
  record_id uuid,
  created_at timestamptz not null default now()
);
alter table public.admin_audit_log enable row level security;
revoke all on public.admin_audit_log from anon, authenticated;
grant select on public.admin_audit_log to authenticated;
create policy "Administrators can read activity" on public.admin_audit_log
  for select to authenticated using (public.has_role(auth.uid(), 'admin'::public.app_role));
create index if not exists admin_audit_log_created_at_idx on public.admin_audit_log (created_at desc);
create index if not exists inquiries_created_at_idx on public.inquiries (created_at desc);
create index if not exists feedback_created_at_idx on public.feedback (created_at desc);

create or replace function public.record_admin_activity()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  -- Public contact submissions are not administrative actions.
  if auth.uid() is not null and public.has_role(auth.uid(), 'admin'::public.app_role) then
    insert into public.admin_audit_log (actor_id, action, record_id)
    values (auth.uid(), tg_table_name || '.' || lower(tg_op), case when tg_op = 'DELETE' then old.id else new.id end);
  end if;
  if tg_op = 'DELETE' then return old; end if;
  return new;
end;
$$;
revoke all on function public.record_admin_activity() from public, anon, authenticated;
create trigger audit_inquiry_changes after update or delete on public.inquiries
  for each row execute function public.record_admin_activity();
create trigger audit_feedback_changes after update or delete on public.feedback
  for each row execute function public.record_admin_activity();
create trigger audit_role_changes after insert or update or delete on public.user_roles
  for each row execute function public.record_admin_activity();

create or replace function public.protect_owner_access()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if old.role = 'admin'::public.app_role
    and exists (select 1 from auth.users where id = old.user_id and lower(email) = 'admin@intorza.com')
    and (tg_op = 'DELETE' or new.user_id <> old.user_id or new.role <> old.role) then
      raise exception 'The owner administrator role cannot be removed' using errcode = '42501';
  end if;
  if tg_op = 'DELETE' then return old; end if;
  return new;
end;
$$;
revoke all on function public.protect_owner_access() from public, anon, authenticated;
create trigger protect_owner_admin before update or delete on public.user_roles
  for each row execute function public.protect_owner_access();

create or replace function public.admin_list_accounts()
returns table (id uuid, email text, created_at timestamptz, last_sign_in_at timestamptz, confirmed boolean, is_admin boolean)
language plpgsql stable security definer set search_path = public, pg_temp as $$
begin
  if not public.has_role(auth.uid(), 'admin'::public.app_role) then
    raise exception 'Administrator access required' using errcode = '42501';
  end if;
  return query select u.id, u.email::text, u.created_at, u.last_sign_in_at, u.email_confirmed_at is not null,
    public.has_role(u.id, 'admin'::public.app_role)
    from auth.users u order by u.created_at desc limit 1000;
end;
$$;
revoke all on function public.admin_list_accounts() from public, anon;
grant execute on function public.admin_list_accounts() to authenticated;

create or replace function public.admin_set_access(target_email text, enabled boolean)
returns void language plpgsql security definer set search_path = public, pg_temp as $$
declare target_id uuid;
begin
  if not public.has_role(auth.uid(), 'admin'::public.app_role) then
    raise exception 'Administrator access required' using errcode = '42501';
  end if;
  select id into target_id from auth.users where lower(email) = lower(trim(target_email)) and email_confirmed_at is not null;
  if target_id is null then raise exception 'A confirmed account with that email must already exist'; end if;
  if not enabled and (target_id = auth.uid() or lower(trim(target_email)) = 'admin@intorza.com') then
    raise exception 'Your own or the owner administrator access cannot be removed' using errcode = '42501';
  end if;
  if enabled then
    insert into public.user_roles(user_id, role) values (target_id, 'admin'::public.app_role) on conflict (user_id, role) do nothing;
  else
    delete from public.user_roles where user_id = target_id and role = 'admin'::public.app_role;
  end if;
end;
$$;
revoke all on function public.admin_set_access(text, boolean) from public, anon;
grant execute on function public.admin_set_access(text, boolean) to authenticated;

commit;
