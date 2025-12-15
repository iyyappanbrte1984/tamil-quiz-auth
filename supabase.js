// supabase.js  (PURE JAVASCRIPT FILE — NO HTML)

const SUPABASE_URL = "https://vrohoqriyitaaszkrtz.supabase.co";
const SUPABASE_ANON_KEY = "PASTE_YOUR_PUBLIC_ANON_KEY_HERE";

const sb = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// expose globally
window.sb = sb;
