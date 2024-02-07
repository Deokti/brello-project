import { useTranslation } from "react-i18next";

import { Input } from "@/shared/ui/Input";
import { SignInPageSuccessful } from "../sign-in-page-successful/sign-in-page-successful.tsx";

import { Button } from "@/shared/ui/Button";
import GoogleIcon from "../../assets/google-icon.svg?react";

import { AuthPageLayout } from "../components/auth-page-layout";
import styles from "./sign-in-page.module.scss";

export const SignInPage = () => {
  const { t } = useTranslation("auth-page");

  return (
    <div className={styles.root}>
      <AuthPageLayout>
        <div className={styles.inner}>
          <SignInPageSuccessful email={"deokneks@gmail.com"} />

          <h1 className={styles.title}>{t("sign-in-page.title")}</h1>
          <h2 className={styles.subtitle}>{t("sign-in-page.subtitle")}</h2>

          <Input
            label={"Email"}
            placeholder={t("sign-in-page.input-placeholder")}
            className={styles.input}
          />

          <Button
            fullWidth
            className={styles.button}
          >
            {t("sign-in-page.get-started")}
          </Button>
          <Button
            fullWidth
            leftIcon={<GoogleIcon />}
            variant={"outlined"}
            color={"secondary"}
          >
            {t("sign-in-page.get-stated-with-google")}
          </Button>
        </div>
      </AuthPageLayout>
    </div>
  );
};
