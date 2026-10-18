begin;
select set_config('request.jwt.claim.sub', (select id::text from auth.users where lower(email) = 'admin@intorza.com'), true);
set local role authenticated;
do $$
begin
  if not public.has_role(auth.uid(), 'admin'::public.app_role) then raise exception 'Owner is not an admin'; end if;
  if not exists (select 1 from public.admin_list_accounts() where lower(email) = 'admin@intorza.com' and is_admin) then raise exception 'Account listing failed'; end if;
  begin
    perform public.admin_set_access('admin@intorza.com', false);
    raise exception 'Owner access removal unexpectedly succeeded';
  exception when insufficient_privilege then null;
  end;
  begin
    delete from public.user_roles where user_id = auth.uid() and role = 'admin';
    raise exception 'Direct owner-role deletion unexpectedly succeeded';
  exception when insufficient_privilege then null;
  end;
end;
$$;
insert into public.inquiries (name, email, subject, message, read)
values ('Admin RLS check', 'admin-rls-check@intorza.com', 'Transactional verification', 'This record must be rolled back.', false);
do $$
declare target_id uuid;
begin
  select id into target_id from public.inquiries where email = 'admin-rls-check@intorza.com' limit 1;
  if target_id is null then raise exception 'Admin cannot read inquiries'; end if;
  update public.inquiries set read = true where id = target_id;
  if not exists (select 1 from public.admin_audit_log where record_id = target_id and action = 'inquiries.update') then raise exception 'Audit trigger failed'; end if;
  delete from public.inquiries where id = target_id;
  if not exists (select 1 from public.admin_audit_log where record_id = target_id and action = 'inquiries.delete') then raise exception 'Delete audit trigger failed'; end if;
end;
$$;
select set_config('request.jwt.claim.sub', gen_random_uuid()::text, true);
do $$
begin
  if exists (select 1 from public.inquiries) then raise exception 'Non-admin can read inquiries'; end if;
  if exists (select 1 from public.feedback) then raise exception 'Non-admin can read feedback'; end if;
  if exists (select 1 from public.admin_audit_log) then raise exception 'Non-admin can read activity'; end if;
  begin
    perform public.admin_list_accounts();
    raise exception 'Non-admin can list accounts';
  exception when insufficient_privilege then null;
  end;
  begin
    perform public.admin_set_access('admin@intorza.com', true);
    raise exception 'Non-admin can grant roles';
  exception when insufficient_privilege then null;
  end;
end;
$$;
reset role;
select set_config('test.owner_id', (select id::text from auth.users where lower(email) = 'admin@intorza.com'), true);
select set_config('request.jwt.claim.sub', '', true);
set local role anon;
do $$
begin
  if public.has_role(current_setting('test.owner_id')::uuid, 'admin'::public.app_role) then raise exception 'Anonymous role probing succeeded'; end if;
  if public.has_role('00000000-0000-0000-0000-000000000000'::uuid, 'admin'::public.app_role) then raise exception 'Anonymous role lookup succeeded'; end if;
  begin
    insert into public.feedback (name, email, message, rating) values (repeat('x', 121), 'bad-address', repeat('x', 5001), 5);
    raise exception 'Oversized feedback unexpectedly succeeded';
  exception when insufficient_privilege then null;
  end;
end;
$$;
insert into public.inquiries (name, email, subject, message, read)
values ('Public contact test', 'contact-rls-check@intorza.com', 'Anonymous contact', 'This anonymous record is rolled back.', false);
do $$
begin
  if exists (select 1 from public.inquiries) then raise exception 'Anonymous user can read inquiries'; end if;
  if exists (select 1 from public.feedback) then raise exception 'Anonymous user can read feedback'; end if;
  begin
    perform public.admin_list_accounts();
    raise exception 'Anonymous user can list accounts';
  exception when insufficient_privilege then null;
  end;
  begin
    insert into public.inquiries (name, email, subject, message, read)
    values ('x', 'invalid', 'x', 'x', true);
    raise exception 'Anonymous malformed submission unexpectedly succeeded';
  exception when insufficient_privilege then null;
  end;
end;
$$;
rollback;
select 'PASS: owner privileges, owner protection, inquiry management, audit records, non-admin isolation, and anonymous isolation; all test writes rolled back' as result;

