import { createEffect } from "effector/effector.umd";

import { supabaseClient } from "@/shared/lib/api/client.ts";

export const logout = createEffect(async () => {
  const { error } = await supabaseClient.auth.signOut();

  if (error) throw error;
});
