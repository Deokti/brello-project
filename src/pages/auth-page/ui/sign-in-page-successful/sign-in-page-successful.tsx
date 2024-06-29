import cx from "classnames";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";

import { $email, tryAgainClicked } from "@/pages/auth-page/model/auth.ts";

import { SignInSuccessful } from "../components/sign-in-successful/sign-in-successful.tsx";
import styles from "./sign-in-page-successful.module.scss";

interface SignInPageSuccessfulProps {
  className?: string;
}

export const SignInPageSuccessful = (props: SignInPageSuccessfulProps) => {
  const { t } = useTranslation("auth-page");
  const [email] = useUnit([$email]);
  const handleTryAgain = useUnit(tryAgainClicked);
  const { className } = props;

  return (
    <div className={cx(styles.root, className)}>
      <SignInSuccessful
        email={email}
        title={t("sign-in-page-successful.title")}
        subtitle={t("sign-in-page-successful.subtitle")}
        handleBack={handleTryAgain}
      />
    </div>
  );
};
