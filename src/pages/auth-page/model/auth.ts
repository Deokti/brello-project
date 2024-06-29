import { attach, createEvent, createStore, sample } from "effector";
import { not } from "patronum";

import { apiAuth } from "@/shared/lib/api/apiAuth";
import { ROUTES } from "@/shared/routing";

import { validateEmail } from "./constants";
import { SignInPageError } from "./types";

/**
 * Аутентификация через ввод email
 * 1. $email Пользователь вводит email
 * 2. Убеждаемся, что ввод email корректный, и пользователь не ввёл тарабарщину
 *  2.1. $error. Если email не корректный показываем ошибку: "Должен быть корректный адрес электронной почты"
 *  2.2. $success Если email корректный отправляем запрос на API
 * 3. $pending Пока запрос отправляется, пользователь не может нажимать ни на что - показывается loader
 * 4. Когда запрос отправляем есть несколько сценариев:
 *  4.1. Если отправка завершилась успешно, перенаправляем на страницу `auth/success`
 *  4.2. $error Если запрос провалился, перенаправляем на странице `auth/error`
 */

const signInPost = attach({ effect: apiAuth.signInWithPassword });

export const emailChanged = createEvent<string>("");
export const passwordChanged = createEvent<string>("");
export const formSubmitted = createEvent();

export const tryAgainClicked = createEvent();

export const $email = createStore<string>("");
export const $password = createStore<string>("");

export const $pending = signInPost.pending;
export const $errorEmail = createStore<SignInPageError | null>(null);
export const $errorPassword = createStore<SignInPageError | null>(null);
export const $success = createStore<boolean>(false);

const $isValidEmail = $email.map((email) => validateEmail.test(email));
const $isValidPassword = $password.map((password) => password.length > 6);

$email.on(emailChanged, (_, newEmailValue) => newEmailValue);
$password.on(passwordChanged, (_, newPasswordValue) => newPasswordValue);
$errorEmail.on(signInPost.failData, (_, error) => {
  if (error.name === "AuthApiError") return SignInPageError.RateLimit;
});

// Очищение ошибки при исправлении email
sample({
  clock: [emailChanged, passwordChanged],
  fn: () => null,
  target: [$errorEmail.reinit, $errorPassword.reinit],
});

// Записывание ошибки во время валидации
sample({
  clock: formSubmitted,
  filter: not($isValidEmail),
  fn: () => SignInPageError.InvalidEmail,
  target: $errorEmail,
});

sample({
  clock: formSubmitted,
  filter: not($isValidPassword),
  fn: () => SignInPageError.InvalidPassword,
  target: $errorPassword,
});

// Отправка запроса на API если валидация прошла успешно
sample({
  clock: formSubmitted,
  source: { email: $email, password: $password },
  filter: () => {
    return !not($isValidPassword).defaultState && !not($isValidEmail).defaultState;
  },
  target: signInPost,
});

sample({
  clock: tryAgainClicked,
  target: [$email.reinit, $password.reinit, $errorEmail.reinit],
});

sample({
  clock: signInPost.failData,
  target: ROUTES.AUTH.ERROR.open,
});

sample({
  clock: tryAgainClicked,
  target: ROUTES.AUTH.SIGN_IN.open,
});

// При нажатии перерогиниться сбросить email и error
sample({
  clock: signInPost.done,
  target: ROUTES.AUTH.FINALLY.open,
});
