import { signInMagicLinkFx } from "./signInMagicLinkFx";
import { getMeFx } from "./getMe";
import { logout } from "./logout";

export const apiAuth = {
  getMe: getMeFx,
  logInByEmail: signInMagicLinkFx,
  signInOut: logout,
};
