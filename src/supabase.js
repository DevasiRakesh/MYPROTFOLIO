import { createClient } from '@supabase/supabase-js';

// Access environment variables using import.meta.env for Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://iichyreprakqfjpdaqwz.supabase.co"; 
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_dI_272-EohYBfbJFZ6tjfg_VY1VSe5D";

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase credentials are missing.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);