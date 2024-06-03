import { createRoutesView } from "atomic-router-react";
import { AuthPageRoute } from "@/pages/auth-page";
import { OnboardingPageRoute } from "@/pages/onboarding-page";

export const RoutesView = createRoutesView({
  routes: [AuthPageRoute, OnboardingPageRoute],
});
