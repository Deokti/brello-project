import cx from "classnames";
import { useTranslation } from "react-i18next";

import { AuthPageLayout } from "@/pages/auth-page/layout/auth-page-layout";

import LeftIcon from "@/shared/assets/arrow-left.svg?react";
import { SButton } from "@/shared/ui/s-button";

import SuccessfulIcon from "../../assets/sign-in-successful.svg?react";
import styles from "./sign-in-page-successful.module.scss";

interface SignInPageSuccessfulProps {
  className?: string;
  email: string;
}

export const SignInPageSuccessful = (props: SignInPageSuccessfulProps) => {
  const { t } = useTranslation("auth-page");
  const { className, email } = props;

  return (
    <div className={cx(styles.root, className)}>
      <AuthPageLayout>
        <SuccessfulIcon />

        <h1>{t("sign-in-page-successful.title")}</h1>
        <h2>
          {t("sign-in-page-successful.subtitle")} <span>{email}</span>
        </h2>

        <SButton
          leftIcon={<LeftIcon />}
          size={"sm"}
          variant="text"
          className={styles.button}
        >
          {t("sign-in-page-successful.back-to-log-in")}
        </SButton>
      </AuthPageLayout>
    </div>
  );
};
