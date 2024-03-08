import { useTranslation } from "react-i18next";

import { SInput } from "@/shared/ui/s-input";

import { SButton } from "@/shared/ui/s-button";
import GoogleIcon from "../../assets/google-icon.svg?react";
import { AuthPageLayout } from "../../layout/auth-page-layout";

import styles from "./sign-in-page.module.scss";

export const SignInPage = () => {
  const { t } = useTranslation("auth-page");

  return (
    <div className={styles.root}>
      <AuthPageLayout>
        <div className={styles.inner}>
          <h1 className={styles.title}>{t("sign-in-page.title")}</h1>
          <h2 className={styles.subtitle}>{t("sign-in-page.subtitle")}</h2>

          <SInput
            label={"Email"}
            placeholder={t("sign-in-page.input-placeholder")}
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
        </div>
      </AuthPageLayout>
    </div>
  );
};
