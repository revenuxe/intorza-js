begin;

-- Do not expose another account's role membership through the anonymous RPC.
-- Administrators retain account-list access; RLS checks for the caller still work.
create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean language sql stable security definer set search_path = public, pg_temp as $$
  select exists (
    select 1 from public.user_roles r
    where r.user_id = _user_id and r.role = _role
      and (
        _user_id = auth.uid()
        or exists (select 1 from public.user_roles actor where actor.user_id = auth.uid() and actor.role = 'admin'::public.app_role)
      )
  );
$$;

-- Preserve optional feedback fields and existing records, but bound new public writes.
alter policy "Anyone can submit feedback" on public.feedback
  with check (
    rating between 1 and 5
    and (name is null or char_length(name) <= 120)
    and (message is null or char_length(message) <= 5000)
    and (email is null or email = '' or (
      char_length(email) <= 254
      and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
    ))
  );

commit;
