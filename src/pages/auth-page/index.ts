import { ROUTES } from "@/shared/routing";

import { SignInPageError } from "./ui/sign-in-page-error/sign-in-page-error.tsx";
import { SignInPageFinally } from "./ui/sign-in-page-finally/sign-in-page-finally.tsx";
import { SignInPage } from "./ui/sign-in-page/sign-in-page.tsx";

export const SignInPageRoute = {
  view: SignInPage,
  route: ROUTES.AUTH.SIGN_IN,
};

export const SignInPageErrorRoute = {
  view: SignInPageError,
  route: ROUTES.AUTH.ERROR,
};

export const SignInPageFinallyRoute = {
  view: SignInPageFinally,
  route: ROUTES.AUTH.FINALLY,
};
