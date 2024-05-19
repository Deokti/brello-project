import { API_KEY, PROJECT_URL } from "@/shared/config/env";
import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(PROJECT_URL, API_KEY);
