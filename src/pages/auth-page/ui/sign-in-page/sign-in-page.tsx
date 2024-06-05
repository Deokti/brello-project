import { useUnit } from "effector-react";
import { motion } from "framer-motion";
import { FormEvent, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ClipLoader } from "react-spinners";

import { animationFromLeftToRight } from "@/pages/auth-page/model/motion.animate.ts";

import { SButton } from "@/shared/ui/s-button";
import { SInput } from "@/shared/ui/s-input";

import GoogleIcon from "../../assets/google-icon.svg?react";
import { AuthPageLayout } from "../../layout/auth-page-layout";
import { $email, $error, $pending, $success, emailChanged, formSubmitted } from "../../model/auth";
import styles from "./sign-in-page.module.scss";

export const SignInPage = () => {
  const { t } = useTranslation("auth-page");

  const [email, pending, error] = useUnit([$email, $pending, $error, $success]);
  const [handleEmail, handleSubmitForm] = useUnit([emailChanged, formSubmitted]);

  const onSubmitForm = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleSubmitForm();
    },
    [handleSubmitForm],
  );

  const errorMessage = error && t(`errors.${error}`);

  return (
    <div className={styles.root}>
      <AuthPageLayout>
        <form
          className={styles.inner}
          onSubmit={onSubmitForm}
        >
          <motion.h1
            className={styles.title}
            {...animationFromLeftToRight(0.5)}
          >
            {t("sign-in-page.title")}
          </motion.h1>
          <motion.h2
            className={styles.subtitle}
            {...animationFromLeftToRight(0.3)}
          >
            {t("sign-in-page.subtitle")}
          </motion.h2>

          <motion.div {...animationFromLeftToRight(0.2)}>
            <SInput
              label={"Email"}
              value={email}
              placeholder={t("sign-in-page.input-placeholder")}
              onChange={(event) => handleEmail(event.target.value)}
              className={styles.input}
              disabled={pending}
              errorMessage={errorMessage}
            />
          </motion.div>

          <motion.div {...animationFromLeftToRight(0.5)}>
            <SButton
              fullWidth
              className={styles.button}
              disabled={pending}
              type="submit"
              leftIcon={
                pending && (
                  <ClipLoader
                    color="#fff"
                    size={20}
                  />
                )
              }
            >
              {t("sign-in-page.get-started")}
            </SButton>
            <SButton
              fullWidth
              leftIcon={<GoogleIcon />}
              variant={"outlined"}
              color={"secondary"}
              disabled={pending}
            >
              {t("sign-in-page.get-stated-with-google")}
            </SButton>
          </motion.div>
        </form>
      </AuthPageLayout>
    </div>
  );
};
