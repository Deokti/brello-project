import cx from "classnames";
import { useUnit } from "effector-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { AuthPageLayout } from "@/pages/auth-page/layout/auth-page-layout";
import { tryAgainClicked } from "@/pages/auth-page/model/auth.ts";
import { animationFromRightToLeft } from "@/pages/auth-page/model/motion.animate.ts";

import LeftIcon from "@/shared/assets/arrow-left.svg?react";
import { SButton } from "@/shared/ui/s-button";

import ErrorIcon from "../../assets/sign-in-error.svg?react";
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
      <AuthPageLayout>
        <motion.div {...animationFromRightToLeft(0.2)}>
          <ErrorIcon />

          <h1>{t("sign-in-page-error.title")}</h1>
          <h2>{t("sign-in-page-error.subtitle")}</h2>

          <SButton
            leftIcon={<LeftIcon />}
            onClick={handleTryAgainClicked}
            size={"sm"}
            variant="text"
            className={styles.button}
          >
            {t("sign-in-page-error.try-again")}
          </SButton>
        </motion.div>
      </AuthPageLayout>
    </div>
  );
};
