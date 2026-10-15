-- Run in a NEW, dedicated Supabase project for olbarun.kr only.
-- Never expose service_role keys to browsers or NEXT_PUBLIC variables.
create table if not exists public.board_notices (
 id bigint generated always as identity primary key,
 title text not null check(char_length(title) between 1 and 200),
 content text not null,
 is_pinned boolean not null default false,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
create table if not exists public.board_inquiries (
 id bigint generated always as identity primary key,
 receipt text not null unique,
 name text not null,
 phone text not null,
 title text not null,
 content text not null,
 password_hash text not null,
 answer text,
 status text not null default 'pending' check(status in ('pending','answered')),
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
alter table public.board_notices enable row level security;
alter table public.board_inquiries enable row level security;
revoke all on public.board_notices from anon, authenticated;
revoke all on public.board_inquiries from anon, authenticated;
-- Only the server-side service_role client may access these tables.
