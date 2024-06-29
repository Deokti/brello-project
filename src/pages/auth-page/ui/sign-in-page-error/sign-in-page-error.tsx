import cx from "classnames";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";

import { tryAgainClicked } from "@/pages/auth-page/model/auth.ts";
import { SignInError } from "@/pages/auth-page/ui/components/sign-in-error/sign-in-error.tsx";

import styles from "./sign-in-page-error.module.scss";

interface SignInPageErrorProps {
  className?: string;
}

export const SignInPageError = (props: SignInPageErrorProps) => {
  const { t } = useTranslation("auth-page");
  const handleTryAgainClicked = useUnit(tryAgainClicked);

  const { className } = props;

  return (
    <div className={cx(styles.root, className)}>
      <SignInError
        title={t("sign-in-page-error.title")}
        subtitle={t("sign-in-page-error.subtitle")}
        onBackClick={handleTryAgainClicked}
      />
    </div>
  );
};
