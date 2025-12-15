<!-- supabase.js -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
  const SUPABASE_URL = "https://vrohoqriyitaaszkrqtz.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyb2hvcXJpeWl0YWFzemtycXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3OTg3ODksImV4cCI6MjA4MTM3NDc4OX0.z8YkG1DBYT4PcqLCb9xUW_-3vULbHH_fEBkIll90ACc";

  window.sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
</script>
