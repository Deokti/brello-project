import { createRoutesView } from "atomic-router-react";

import {
  SignInPageErrorRoute,
  SignInPageRoute,
  SignInPageSuccessfulRoute,
} from "@/pages/auth-page";
import { OnboardingPageRoute } from "@/pages/onboarding-page";

export const RoutesView = createRoutesView({
  routes: [SignInPageRoute, SignInPageSuccessfulRoute, SignInPageErrorRoute, OnboardingPageRoute],
});
