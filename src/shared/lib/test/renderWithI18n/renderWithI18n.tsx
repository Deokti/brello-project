import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18nMock from "../../../config/i18n/i18n.mock.ts";

export const renderWithI18n = (component: ReactNode) => {
  return <I18nextProvider i18n={i18nMock}>{component}</I18nextProvider>;
};
