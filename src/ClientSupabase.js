import { createClient } from "@supabase/supabase-js";

const apiKey = "sb_publishable_kYonLGsjm3_hlZ94nhXsUg_SIkLcsHo";
const urlSupabase = "https://kjodwehfuzrbobkavjib.supabase.co";

// Create a single supabase client for interacting with your database
export const supabase = createClient(urlSupabase, apiKey);
