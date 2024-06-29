import { createEvent, createStore, sample } from "effector";
import { attach } from "effector/effector.umd";
import { delay } from "patronum";

import { apiAuth } from "@/shared/lib/api/apiAuth";
import { ROUTES } from "@/shared/routing";

export const getMe = attach({ effect: apiAuth.getMe });

export const $pending = getMe.pending;
export const $successfully = createStore(false);

export const tryAgainClicked = createEvent();

export const authSucceed = createEvent();
export const authErrored = createEvent();

sample({
  clock: ROUTES.AUTH.FINALLY.opened,
  target: getMe,
});

sample({
  clock: getMe.doneData,
  filter: Boolean,
  target: authSucceed,
});

$successfully.on(authSucceed, () => true);

delay({
  source: authSucceed,
  timeout: 800,
  target: ROUTES.HOME.open,
});

sample({
  clock: getMe.doneData,
  filter: (user) => !user,
  target: authErrored,
});

sample({
  clock: getMe.fail,
  target: authErrored,
});

sample({
  clock: tryAgainClicked,
  route: ROUTES.AUTH.SIGN_IN.open,
});
$successfully.on(authErrored, () => false);
