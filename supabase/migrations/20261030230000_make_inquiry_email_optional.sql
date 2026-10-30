begin;

-- Keep historical email addresses while allowing new inquiries without one.
alter table public.inquiries
  alter column email drop not null;

alter table public.inquiries
  add constraint inquiries_optional_email_format
  check (
    email is null
    or (char_length(email) <= 254 and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$')
  );

-- Keep anonymous REST writes aligned with the optional-email form behavior.
alter policy "Anyone can submit inquiries" on public.inquiries
  with check (
    read = false
    and char_length(trim(name)) between 2 and 120
    and (
      email is null
      or (char_length(email) <= 254 and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$')
    )
    and phone is not null
    and phone ~ '^\+?[0-9]{7,15}$'
    and subject is not null and char_length(trim(subject)) between 3 and 200
    and (message is null or char_length(trim(message)) between 10 and 5000)
  );

commit;
