-- ═══════════════════════════════════════════════════════════════
-- SOLTEX — Schema tambatra ho an'ny ADMIN PANEL
-- Alefaso ao amin'ny Supabase Dashboard > SQL Editor > New query
-- AORIAN'NY schema.sql (izay efa nalefanao taloha)
-- ═══════════════════════════════════════════════════════════════

-- 1) CONTENU MODIFIABLE — lahatsoratra hero, stats, sns
create table if not exists site_content (
  key         text primary key,
  value       jsonb not null,
  updated_at  timestamptz not null default now()
);
alter table site_content enable row level security;

drop policy if exists "site_content_public_read" on site_content;
create policy "site_content_public_read" on site_content
  for select to anon, authenticated using (true);

drop policy if exists "site_content_admin_write" on site_content;
create policy "site_content_admin_write" on site_content
  for all to authenticated using (true) with check (true);

-- 2) PRODUITS — manome alalana ny ADMIN (authenticated) hanampy /
--    hanova / hamafa produits. Ny "anon" (mpitsidika) dia mahazo
--    MAMAKY ihany (efa napetraka tao amin'ny schema.sql voalohany).
drop policy if exists "products_admin_write" on products;
create policy "products_admin_write" on products
  for all to authenticated using (true) with check (true);

-- 3) COMMANDES / MESSAGES — mamela ny admin (authenticated) hijery
--    ny commande sy hafatra rehetra tao amin'ny panel admin.
drop policy if exists "orders_admin_read" on orders;
create policy "orders_admin_read" on orders
  for select to authenticated using (true);

drop policy if exists "order_items_admin_read" on order_items;
create policy "order_items_admin_read" on order_items
  for select to authenticated using (true);

drop policy if exists "contact_admin_read" on contact_messages;
create policy "contact_admin_read" on contact_messages
  for select to authenticated using (true);

-- 4) STORAGE — bucket ho an'ny sary produits (public amin'ny
--    famakiana, admin ihany no afaka manampy/mamafa)
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

drop policy if exists "product_images_public_read" on storage.objects;
create policy "product_images_public_read" on storage.objects
  for select to anon, authenticated
  using (bucket_id = 'product-images');

drop policy if exists "product_images_admin_write" on storage.objects;
create policy "product_images_admin_write" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'product-images');

drop policy if exists "product_images_admin_delete" on storage.objects;
create policy "product_images_admin_delete" on storage.objects
  for delete to authenticated
  using (bucket_id = 'product-images');

-- ═══════════════════════════════════════════════════════════════
-- DINGANA MANARAKA (tsy azo atao amin'ny SQL — Dashboard no ilaina):
--
-- 1. Mankanesa any amin'ny Supabase Dashboard > Authentication > Users
-- 2. Tsindrio "Add user" > "Create new user"
-- 3. Ampidiro ny email sy password tianao ho an'ny CONTENANT/ADMIN
--    (ianao, Tanjona, irery no mahalala azy io)
-- 4. Tsy ilaina manasongadina "Auto Confirm User" — ataovy checked
--    io mba ho azo ampiasaina avy hatrany ny fidirana
--
-- Rehefa vita izany dia io email sy password io no ampiasainao
-- ao amin'ny "Fidirana Admin" eo amin'ny site.
-- ═══════════════════════════════════════════════════════════════
