import { createEffect } from "effector";

import { Email } from "@/shared/lib/api/apiAuth/types";
import { supabaseClient } from "@/shared/lib/api/client.ts";

export const signInByEmailFx = createEffect(async (email: Email) => {
  const currentURL = document.location.toString();
  const emailRedirectTo = new URL("/auth/sign-in/finally", currentURL).toString();
  const { error } = await supabaseClient.auth.signInWithOtp({
    email,
    options: { emailRedirectTo },
  });

  // // TODO: Сделать всплывашку в правом нижнем углу
  if (error) {
    throw error;
  }
});
