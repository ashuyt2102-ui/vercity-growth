-- Run in Supabase SQL editor to create the enquiries table.
create table if not exists public.enquiries (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  service text,
  plan text,
  business_name text,
  phone text,
  budget text,
  ad_budget text,
  brief text not null
);

-- Service role writes from the server; no public access needed.
alter table public.enquiries enable row level security;
