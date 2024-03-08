import { createEvent, createStore, sample, } from "effector";
import { debug } from "patronum";


export const $email = createStore("");

export const emailChanged = createEvent<string>("");
export const emailSubmitted = createEvent(); 

$email.on(emailChanged, (_, newEmailValue) => newEmailValue);

const $store = sample({
  source: $email,
  clock: emailSubmitted,
});

debug($store, emailSubmitted)