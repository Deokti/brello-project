import cx from "classnames";
import SuccessfulIcon from "../../assets/sign-in-successful.svg?react";
import LeftIcon from "@/shared/assets/arrow-left.svg?react";

import styles from "./sign-in-page-successful.module.scss";
import { Button } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";

interface SignInPageSuccessfulProps {
  className?: string;
  email: string;
}

export const SignInPageSuccessful = (props: SignInPageSuccessfulProps) => {
  const { t } = useTranslation("auth-page");
  const { className, email } = props;

  return (
    <div className={cx(styles.root, className)}>
      <SuccessfulIcon />

      <h1>{t("sign-in-page-successful.title")}</h1>
      <h2>
        {t("sign-in-page-successful.subtitle")} <span>{email}</span>
      </h2>

      <Button
        leftIcon={<LeftIcon />}
        size={"sm"}
        variant="text"
        className={styles.button}
      >
        {t("sign-in-page-successful.try-again")}
      </Button>
    </div>
  );
};
