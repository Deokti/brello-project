import { getMeFx } from "./getMe";
import { logout } from "./logout";
import { signInByEmailFx } from "./signInEmailFx";

export const apiAuth = {
  getMe: getMeFx,
  logInByEmail: signInByEmailFx,
  signInOut: logout,
};
