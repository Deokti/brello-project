import { createEffect } from "effector";
import { supabaseClient } from "@/shared/lib/api/client.ts";
import { Email } from "@/shared/lib/api/apiAuth/types";

export const signInByEmailFx = createEffect(async (email: Email) => {
  const { error, data } = await supabaseClient.auth.signInWithOtp({ email });

  console.log(data)

  // // TODO: Сделать всплывашку в правом нижнем углу
  if (error) throw error;
});
