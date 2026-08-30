-- =========================================================
--  Migration: Crosshair image upload support
--  Run this ONCE in Supabase Dashboard > SQL Editor
-- =========================================================

-- 1. Create a public storage bucket for crosshair PNGs
insert into storage.buckets (id, name, public)
values ('crosshairs', 'crosshairs', true)
on conflict (id) do nothing;

-- 2. Storage policies: anyone can view crosshair images (public bucket),
--    but a user can only upload/update/delete files inside their
--    OWN folder (named after their user id) within the bucket.

create policy "crosshairs_public_read"
on storage.objects for select
using (bucket_id = 'crosshairs');

create policy "crosshairs_insert_own"
on storage.objects for insert
with check (
  bucket_id = 'crosshairs'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy "crosshairs_update_own"
on storage.objects for update
using (
  bucket_id = 'crosshairs'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy "crosshairs_delete_own"
on storage.objects for delete
using (
  bucket_id = 'crosshairs'
  and (storage.foldername(name))[1] = auth.uid()::text
);
