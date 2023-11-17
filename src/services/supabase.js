import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://crgmydmjscocjaiivygr.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
