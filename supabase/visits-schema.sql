-- ═══════════════════════════════════════════════════════════════
-- SOLTEX — Schema ho an'ny fanaraha-maso ny mpitsidika (Visiteurs)
-- Alefaso ao amin'ny Supabase Dashboard > SQL Editor > New query
-- AORIAN'NY schema.sql sy admin-schema.sql
-- ═══════════════════════════════════════════════════════════════

create table if not exists site_visits (
  id           uuid primary key default gen_random_uuid(),
  session_id   text not null,
  page         text,
  referrer     text,
  user_agent   text,
  device_type  text,
  browser      text,
  country      text,
  city         text,
  created_at   timestamptz not null default now()
);

alter table site_visits enable row level security;

-- Mahazo mampiditra fitsidihana vaovao ny mpitsidika rehetra (anon) —
-- io ihany no fahazoan-dalana omena azy ireo (tsy mahazo mamaky).
drop policy if exists "site_visits_public_insert" on site_visits;
create policy "site_visits_public_insert" on site_visits
  for insert to anon with check (true);

-- Ianao (admin, authenticated) ihany no mahazo mamaky ny lisitry
-- ny fitsidihana rehetra.
drop policy if exists "site_visits_admin_read" on site_visits;
create policy "site_visits_admin_read" on site_visits
  for select to authenticated using (true);

create index if not exists idx_site_visits_created_at on site_visits(created_at desc);
create index if not exists idx_site_visits_session on site_visits(session_id);
