select jsonb_build_object(
 'tables',(select jsonb_agg(jsonb_build_object('name',c.relname,'rls',c.relrowsecurity)) from pg_class c join pg_namespace n on n.oid=c.relnamespace where n.nspname='public' and c.relkind='r'),
 'policies',(select jsonb_agg(to_jsonb(p)) from pg_policies p where schemaname in ('public','storage')),
 'buckets',(select jsonb_agg(jsonb_build_object('name',name,'public',public,'limit',file_size_limit,'mime_types',allowed_mime_types)) from storage.buckets),
 'role_function',(select pg_get_functiondef(p.oid) from pg_proc p join pg_namespace n on n.oid=p.pronamespace where n.nspname='public' and proname='has_role')
) as security_audit;
