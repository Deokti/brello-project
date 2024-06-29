import { UnmappedRouteObject, createRoute } from "atomic-router";

export const ROUTES = {
  HOME: createRoute(),
  NOT_FOUND: createRoute(),
  AUTH: {
    SIGN_IN: createRoute(),
    SUCCESS: createRoute(),
    ERROR: createRoute(),
    FINALLY: createRoute(),
  },
  ONBOARDING: {
    USER: createRoute(),
  },
};

export const routesConfig: UnmappedRouteObject<object>[] = [
  { path: "/", route: ROUTES.HOME },
  { path: "/auth/sign-in", route: ROUTES.AUTH.SIGN_IN },
  { path: "/auth/sign-in/success", route: ROUTES.AUTH.SUCCESS },
  { path: "/auth/sign-in/error", route: ROUTES.AUTH.ERROR },
  { path: "/auth/sign-in/finally", route: ROUTES.AUTH.FINALLY },
  { path: "/onboarding/user", route: ROUTES.ONBOARDING.USER },
];
