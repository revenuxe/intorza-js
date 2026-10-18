begin;

-- Validate anonymous inserts in the database too, even if a caller bypasses the form.
-- Administrator writes remain governed by the separate administrator policy.
alter policy "Anyone can submit inquiries" on public.inquiries
  with check (
    read = false
    and char_length(trim(name)) between 2 and 120
    and char_length(email) <= 254
    and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
    and subject is not null and char_length(trim(subject)) between 3 and 200
    and char_length(trim(message)) between 10 and 5000
  );

-- The website no longer publishes or schedules blog content.
-- Preserve the job definition and database data, but stop future execution.
do $$
declare retired_job bigint;
begin
  if to_regclass('cron.job') is not null then
    for retired_job in select jobid from cron.job where jobname = 'process-scheduled-blogs-daily' and active loop
      perform cron.alter_job(retired_job, active := false);
    end loop;
  end if;
end;
$$;

commit;
