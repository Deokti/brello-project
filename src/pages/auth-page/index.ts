import { SignInPage } from "@/pages/auth-page/ui/sign-in-page/sign-in-page.tsx";
import { ROUTES } from "@/shared/routing";

export { SignInPage } from "./ui/sign-in-page/sign-in-page.tsx";

export const AuthPageRoute = {
  view: SignInPage,
  route: ROUTES.AUTH.SIGN_IN,
};
