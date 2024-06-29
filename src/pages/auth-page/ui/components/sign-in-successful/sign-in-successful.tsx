import cx from "classnames";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { AuthPageLayout } from "@/pages/auth-page/layout/auth-page-layout";
import { animationFromRightToLeft } from "@/pages/auth-page/model/motion.animate.ts";

import LeftIcon from "@/shared/assets/arrow-left.svg?react";
import { SButton } from "@/shared/ui/s-button";

import SuccessfulIcon from "../../../assets/sign-in-successful.svg?react";
import styles from "./sign-in-successful.module.scss";

interface SignInSuccessfulProps {
  title: string;
  subtitle: string;
  className?: string;
  email?: string;

  handleBack?(): void;
}

export const SignInSuccessful = (props: SignInSuccessfulProps) => {
  const { t } = useTranslation("auth-page");
  const { className, handleBack, title, subtitle, email } = props;

  return (
    <div className={cx(styles.root, className)}>
      <AuthPageLayout>
        <motion.div {...animationFromRightToLeft(0.2)}>
          <SuccessfulIcon />

          <h1>{title}</h1>
          <h2>
            {subtitle} <span>{email}</span>
          </h2>

          {handleBack && (
            <SButton
              leftIcon={<LeftIcon />}
              size={"sm"}
              variant="text"
              onClick={handleBack}
              className={styles.button}
            >
              {t("sign-in-page-successful.back-to-log-in")}
            </SButton>
          )}
        </motion.div>
      </AuthPageLayout>
    </div>
  );
};
