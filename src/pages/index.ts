import { createRoutesView } from "atomic-router-react";

import { SignInPageErrorRoute, SignInPageFinallyRoute, SignInPageRoute } from "@/pages/auth-page";
import { OnboardingPageRoute } from "@/pages/onboarding-page";

export const RoutesView = createRoutesView({
  routes: [SignInPageRoute, SignInPageErrorRoute, SignInPageFinallyRoute, OnboardingPageRoute],
});
