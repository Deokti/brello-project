import { createEffect } from "effector";

import { Email, Password } from "@/shared/lib/api/apiAuth/types";
import { supabaseClient } from "@/shared/lib/api/client.ts";

export const signInWithPasswordFx = createEffect(
  async ({ email, password }: { email: Email; password: Password }) => {
    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    // // TODO: Сделать всплывашку в правом нижнем углу
    if (error) {
      throw error;
    }
  },
);
