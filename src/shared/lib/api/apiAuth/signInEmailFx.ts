import { createEffect } from "effector";

import { Email } from "@/shared/lib/api/apiAuth/types";
import { supabaseClient } from "@/shared/lib/api/client.ts";

export const signInByEmailFx = createEffect(async (email: Email) => {
  const { error, data } = await supabaseClient.auth.signInWithOtp({ email });

  console.log(data);

  // // TODO: Сделать всплывашку в правом нижнем углу
  if (error) {
    throw error;
  }
});
