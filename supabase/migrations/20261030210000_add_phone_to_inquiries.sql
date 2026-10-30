begin;

-- Preserve existing inquiries; new public submissions must provide a valid phone.
alter table public.inquiries
  add column phone text;

alter table public.inquiries
  add constraint inquiries_phone_format
  check (phone is null or phone ~ '^\+?[0-9]{7,15}$');

-- Keep server-side and database-side validation aligned for anonymous submissions.
alter policy "Anyone can submit inquiries" on public.inquiries
  with check (
    read = false
    and char_length(trim(name)) between 2 and 120
    and char_length(email) <= 254
    and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
    and phone is not null
    and phone ~ '^\+?[0-9]{7,15}$'
    and subject is not null and char_length(trim(subject)) between 3 and 200
    and char_length(trim(message)) between 10 and 5000
  );

commit;
