import { attach, createEvent, createStore, sample } from "effector";
import { SignInPageError } from "./types";
import { vilidateEmail } from "./constants";
import { not } from "patronum";
import { apiAuth } from "@/shared/lib/api/apiAuth";

/**
 * Аутентификация через ввод email
 * 1. $email Пользователь вводит email
 * 2. Убеждаемся, что вввод email корренктный, и пользователь не ввёл тарабаршину
 *  2.1. $error. Если email не корректный показываем ошибку: "Должен быть корректный адрес электронной почты"
 *  2.2. $success Если email корректный отправляем запрос на API
 * 3. $pedding Пока запрос отправляется, пользователь не может нажимать ни на что - показывается loader
 * 4. Когда запрос отправляем есть несколько сценариев:
 *  4.1. Если отправка завершилась успешно, перенаправляем на страницу `auth/success`
 *  4.2. $error Если запрос проволился, перенаправляем на странице `auth/error`
 */


const signInPost = attach({ effect: apiAuth.loginByEmailAndPassword });

export const emailChanged = createEvent<string>("");
export const formSubmitted = createEvent(); 

export const $email = createStore<string>("");

export const $pedding = createStore<boolean>(false);
export const $error = createStore<SignInPageError | null>(null);
export const $success = createStore<boolean>(false);

const $isValidEmail = $email.map((email) => vilidateEmail.test(email))

$email.on(emailChanged, (_, newEmailValue) => newEmailValue);

// Очищание ошибки при исправлении email
sample({
  clock: emailChanged,
  fn: () => null,
  target: $error
});

// Записывание ошибки во время валидации
sample({
  clock: formSubmitted,
  filter: not($isValidEmail),
  fn: () => SignInPageError.InvalidEmail,
  target: $error
});

// Отправка запроса на API если валидация прошла успешно
sample({
  clock: formSubmitted,
  source: $email,
  filter: $isValidEmail,
  target: signInPost
});
