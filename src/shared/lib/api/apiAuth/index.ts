import { signInByEmailFx } from "./signInEmailFx";
import { getMeFx } from "./getMe";
import { logout } from "./logout";

export const apiAuth = {
  getMe: getMeFx,
  logInByEmail: signInByEmailFx,
  signInOut: logout,
};
