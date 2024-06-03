import { OnboardingPage } from "@/pages/onboarding-page/ui/onboarding-page/onboarding-page.tsx";
import { ROUTES } from "@/shared/routing";

export { OnboardingPage } from "./ui/onboarding-page/onboarding-page.tsx";

export const OnboardingPageRoute = {
  view: OnboardingPage,
  route: ROUTES.ONBOARDING.USER,
};
