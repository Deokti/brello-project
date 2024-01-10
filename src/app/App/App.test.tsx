import { render } from "@testing-library/react";
import App from "./App.tsx";
import { renderWithI18n } from "@shared/lib/test/renderWithI18n";

test("App", () => {
  expect(true).toBe(true);
});

test("Render App", () => {
  render(renderWithI18n(<App />));
  expect(true).toBeTruthy();
});
