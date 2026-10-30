begin;

-- Older inquiries already contain messages; keep them while allowing new forms to omit one.
alter table public.inquiries
  alter column message drop not null;

alter table public.inquiries
  add constraint inquiries_optional_message_length
  check (message is null or char_length(trim(message)) between 10 and 5000);

-- Keep anonymous REST submissions aligned with server-side form validation.
alter policy "Anyone can submit inquiries" on public.inquiries
  with check (
    read = false
    and char_length(trim(name)) between 2 and 120
    and char_length(email) <= 254
    and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
    and phone is not null
    and phone ~ '^\+?[0-9]{7,15}$'
    and subject is not null and char_length(trim(subject)) between 3 and 200
    and (message is null or char_length(trim(message)) between 10 and 5000)
  );

commit;
