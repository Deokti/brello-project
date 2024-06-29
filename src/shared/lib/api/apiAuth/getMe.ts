import { createEffect } from "effector/effector.umd";

import { supabaseClient } from "@/shared/lib/api/client.ts";

export const getMeFx = createEffect(async () => {
  const { data } = await supabaseClient.auth.getUser();

  return data.user;
});
