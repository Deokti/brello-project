import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";

import GoogleIcon from "../../assets/google-icon.svg?react";
import { AuthPageLayout } from "../components/auth-page-layout";
import styles from "./sign-in-page.module.scss";

export const SignInPage = () => {
  return (
    <div className={styles.root}>
      <AuthPageLayout>
        <div className={styles.inner}>
          <h1 className={styles.title}>Sign In</h1>
          <h2 className={styles.subtitle}>Start your 30-day free trial.</h2>

          <Input
            label={"Email"}
            placeholder={"Enter your email"}
            className={styles.input}
          />

          <Button
            fullWidth
            className={styles.button}
          >
            Get started
          </Button>
          <Button
            fullWidth
            leftIcon={<GoogleIcon />}
            variant={"outlined"}
            color={"secondary"}
          >
            Sign up with Google
          </Button>
        </div>
      </AuthPageLayout>
    </div>
  );
};
