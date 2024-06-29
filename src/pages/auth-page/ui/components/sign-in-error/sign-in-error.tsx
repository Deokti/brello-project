import cx from "classnames";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { AuthPageLayout } from "@/pages/auth-page/layout/auth-page-layout";
import { animationFromRightToLeft } from "@/pages/auth-page/model/motion.animate.ts";

import LeftIcon from "@/shared/assets/arrow-left.svg?react";
import { SButton } from "@/shared/ui/s-button";

import ErrorIcon from "../../../assets/sign-in-error.svg?react";
import styles from "./sign-in-error.module.scss";

interface SignInErrorProps {
  title: string;
  subtitle: string;
  className?: string;

  onBackClick(): void;
}

export const SignInError = (props: SignInErrorProps) => {
  const { t } = useTranslation("auth-page");

  const { className, title, subtitle, onBackClick } = props;

  return (
    <div className={cx(styles.root, className)}>
      <AuthPageLayout>
        <motion.div {...animationFromRightToLeft(0.2)}>
          <ErrorIcon />

          <h1>{title}</h1>
          <h2>{subtitle}</h2>

          <SButton
            leftIcon={<LeftIcon />}
            onClick={onBackClick}
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
