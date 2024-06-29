import { getMeFx } from "./getMe";
import { logout } from "./logout";
import { signInWithPasswordFx } from "./signInWithPassword.ts";

export const apiAuth = {
  getMe: getMeFx,
  signInWithPassword: signInWithPasswordFx,
  signInOut: logout,
};
