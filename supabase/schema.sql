-- Run in Supabase: SQL Editor > New query > Run
create table if not exists admins(user_id uuid primary key references auth.users(id) on delete cascade);
create or replace function is_admin() returns boolean language sql security definer stable set search_path=public as $$ select exists(select 1 from admins where user_id=auth.uid()) $$;

create table if not exists consultation_requests(
  id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(),
  name text not null check(char_length(name) between 1 and 200), organization text check(char_length(organization)<=200),
  email text not null check(char_length(email) between 3 and 320), phone text check(char_length(phone)<=50), service text,
  message text not null check(char_length(message) between 1 and 5000),
  status text not null default 'new' check(status in ('new','contacted','closed')));

create table if not exists events(
  id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(),
  title text not null, description text, event_date timestamptz not null, location text,
  schedule text, pdf_path text,
  published boolean not null default true);

alter table admins enable row level security;
alter table consultation_requests enable row level security;
alter table events enable row level security;

create policy "admin reads self" on admins for select to authenticated using (user_id=auth.uid());
create policy "anyone can submit request" on consultation_requests for insert to anon, authenticated with check (status='new');
create policy "admin manages requests" on consultation_requests for all to authenticated using (is_admin()) with check (is_admin());
create policy "public reads published events" on events for select to anon, authenticated using (published or is_admin());
create policy "admin manages events" on events for all to authenticated using (is_admin()) with check (is_admin());

-- Storage Bucket configuration for event PDFs
insert into storage.buckets (id, name, public) values ('event-files', 'event-files', true)
on conflict (id) do update set public = true;

create policy "public reads event files" on storage.objects for select to public
using (bucket_id = 'event-files');

create policy "admin manages event files" on storage.objects for all to authenticated
using (bucket_id = 'event-files' and is_admin())
with check (bucket_id = 'event-files' and is_admin());
