import { useUnit } from "effector-react/effector-react.mjs";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ScaleLoader } from "react-spinners";

import { AuthPageLayout } from "@/pages/auth-page/layout/auth-page-layout";
import { $pending, $successfully, tryAgainClicked } from "@/pages/auth-page/model/auth-finally.ts";

import { SignInError } from "../components/sign-in-error/sign-in-error.tsx";
import { SignInSuccessful } from "../components/sign-in-successful/sign-in-successful.tsx";
import s from "./sign-in-page-finally.module.scss";

export const SignInPageFinally = () => {
  const { t } = useTranslation("auth-page");
  const [pending, success] = useUnit([$pending, $successfully]);
  const handleTryAgain = useUnit(tryAgainClicked);

  const renderData = useCallback(() => {
    if (pending) {
      return (
        <AuthPageLayout>
          <ScaleLoader
            color="#155EEF"
            width={6}
            height={70}
            className={s.spinner}
          />
        </AuthPageLayout>
      );
    }

    if (success) {
      return (
        <SignInSuccessful
          title={t("sign-in-page-finally.successful-title")}
          subtitle={t("sign-in-page-finally.successful-subtitle")}
        />
      );
    }

    if (!success) {
      return (
        <SignInError
          title={t("sign-in-page-finally.error-title")}
          subtitle={t("sign-in-page-finally.error-subtitle")}
          onBackClick={handleTryAgain}
        />
      );
    }
  }, [handleTryAgain, pending, success, t]);

  return renderData();
};
