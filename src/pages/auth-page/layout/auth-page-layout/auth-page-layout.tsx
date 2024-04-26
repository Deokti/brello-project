import { ReactNode } from "react";
import cx from "classnames";

import LogoIcon from "@/shared/assets/logo.svg?react";
import MailIcon from "@/shared/assets/mail.svg?react";

import styles from "./auth-page-layout.module.scss";
import { LocaleSwitcher } from "@/features/LocaleSwitcher";

interface AuthPageLayoutProps {
  className?: string;
  children: ReactNode;
}

export const AuthPageLayout = (props: AuthPageLayoutProps) => {
  const { className, children } = props;

  const fullYear = new Date().getFullYear();

  return (
    <main className={cx(styles.root, className)}>
      <div className={styles.left}>
        <header className={styles.header}>
          <LogoIcon />
          <LocaleSwitcher />
        </header>

        <div className={styles.children}>{children}</div>

        <footer className={styles.footer}>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <span>@ Brello {fullYear}</span>
          <span>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <MailIcon /> <a href="mailto:help@brello.io">help@brello.io</a>
          </span>
        </footer>
      </div>

      <div className={styles.right} />
    </main>
  );
};
