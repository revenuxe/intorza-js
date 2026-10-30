begin;

-- This constraint could block administrators from updating older inquiries
-- whose messages predate the current public form's length limits. The insert
-- policy still enforces the message limit for new anonymous submissions.
alter table public.inquiries
  drop constraint if exists inquiries_optional_message_length;

commit;
