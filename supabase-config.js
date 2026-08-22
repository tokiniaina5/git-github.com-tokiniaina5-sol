// ── SUPABASE CONFIG ──
// "publishable key" (anon key) ity — azo aseho amin'ny olona rehetra
// eo amin'ny site, satria ny RLS (Row Level Security) ao amin'ny
// Supabase no miaro ny angon-drakitra (jereo supabase/schema.sql).
const SUPABASE_URL = "https://zzvkywngklmyovzqxlcj.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_GW9jggtGQH6kUpRpBa0SPw_oPRnBdrA";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
