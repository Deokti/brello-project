import { createClient } from "@supabase/supabase-js";

import { API_KEY, PROJECT_URL } from "@/shared/config/env";

export const supabaseClient = createClient(PROJECT_URL, API_KEY);
