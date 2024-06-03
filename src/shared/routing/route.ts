import { createRoute, UnmappedRouteObject } from "atomic-router";

export const ROUTES = {
  HOME: createRoute(),
  NOT_FOUND: createRoute(),
  AUTH: {
    SIGN_IN: createRoute(),
  },
  ONBOARDING: {
    USER: createRoute(),
  },
};

export const routesConfig: UnmappedRouteObject<object>[] = [
  { path: "/", route: ROUTES.HOME },
  { path: "/auth/sign-in", route: ROUTES.AUTH.SIGN_IN },
  { path: "/onboarding/user", route: ROUTES.ONBOARDING.USER },
];
