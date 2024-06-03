import { SignInPage } from "./ui/sign-in-page/sign-in-page.tsx";
import { SignInPageError } from "./ui/sign-in-page-error/sign-in-page-error.tsx";
import { SignInPageSuccessful } from "./ui/sign-in-page-successful/sign-in-page-successful.tsx";
import { ROUTES } from "@/shared/routing";

export const SignInPageRoute = {
  view: SignInPage,
  route: ROUTES.AUTH.SIGN_IN,
};

export const SignInPageErrorRoute = {
  view: SignInPageError,
  route: ROUTES.AUTH.ERROR,
};

export const SignInPageSuccessfulRoute = {
  view: SignInPageSuccessful,
  route: ROUTES.AUTH.SUCCESS,
};
