import { createClient } from "@supabase/supabase-js";

import { ANON_API_KEY, PROJECT_URL } from "@/shared/config/env";

export const supabaseClient = createClient(PROJECT_URL, ANON_API_KEY);
