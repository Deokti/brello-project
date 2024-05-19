import { createEffect } from "effector";
import { supabaseClient } from "@/shared/lib/api/client.ts";
import { Email } from "@/shared/lib/api/apiAuth/types";

export const signInMagicLinkFx = createEffect(async (email: Email) => {
  const { error } = await supabaseClient.auth.signInWithOtp({ email });

  // TODO: Сделать всплывашку в правом нижнем углу
  if (error) throw error;
});
