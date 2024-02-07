import cx from "classnames";
import ErrorIcon from "../../assets/sign-in-error.svg?react";
import LeftIcon from "@/shared/assets/arrow-left.svg?react";

import styles from "./sign-in-page-error.module.scss";
import { Button } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";

interface SignInPageErrorProps {
  className?: string;
}

export const SignInPageError = (props: SignInPageErrorProps) => {
  const { t } = useTranslation("auth-page");
  const { className } = props;

  return (
    <div className={cx(styles.root, className)}>
      <ErrorIcon />

      <h1>{t("sign-in-page-error.title")}</h1>
      <h2>{t("sign-in-page-error.subtitle")}</h2>

      <Button
        leftIcon={<LeftIcon />}
        size={"sm"}
        variant="text"
        className={styles.button}
      >
        {t("sign-in-page-error.try-again")}
      </Button>
    </div>
  );
};
