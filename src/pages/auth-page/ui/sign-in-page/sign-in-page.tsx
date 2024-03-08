import { useTranslation } from "react-i18next";

import { SInput } from "@/shared/ui/s-input";

import { SButton } from "@/shared/ui/s-button";
import GoogleIcon from "../../assets/google-icon.svg?react";
import { AuthPageLayout } from "../../layout/auth-page-layout";

import { $email, emailChanged, emailSubmitted } from '../../model/auth-model';

import styles from "./sign-in-page.module.scss";
import { useUnit } from "effector-react";
import { FormEvent, useCallback } from "react";

export const SignInPage = () => {
  const { t } = useTranslation("auth-page");

  const [email, onChangeEmail, handleSubmitForm] = useUnit([$email, emailChanged, emailSubmitted]);


  const onSubmitForm = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmitForm();
  }, [handleSubmitForm])

  return (
    <div className={styles.root}>
      <AuthPageLayout>
        <form className={styles.inner} onSubmit={onSubmitForm}>
          <h1 className={styles.title}>{t("sign-in-page.title")}</h1>
          <h2 className={styles.subtitle}>{t("sign-in-page.subtitle")}</h2>

          <SInput
            label={"Email"}
            value={email}
            placeholder={t("sign-in-page.input-placeholder")}
            onChange={(event) => onChangeEmail(event.target.value)}
            className={styles.input}
          />

          <SButton
            fullWidth
            className={styles.button}
          >
            {t("sign-in-page.get-started")}
          </SButton>
          <SButton
            fullWidth
            leftIcon={<GoogleIcon />}
            variant={"outlined"}
            color={"secondary"}
          >
            {t("sign-in-page.get-stated-with-google")}
          </SButton>
        </form>
      </AuthPageLayout>
    </div>
  );
};
