import cx from "classnames";

import { AuthPageLayout } from "../components/auth-page-layout";
import styles from "./sign-in-page.module.scss";

export const SignInPage = () => {
  return (
    <div className={cx(styles.root)}>
      <AuthPageLayout>Sign In Page</AuthPageLayout>
    </div>
  );
};
