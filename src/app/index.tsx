import "@fontsource/roboto";
import "@/shared/config/i18n/i18n";
import "./styles/index.scss";

import { SignInPage } from "@/pages/auth-page/ui/sign-in-page/sign-in-page.tsx";

export function App() {
  return (
    <div className="app main-theme">
      <SignInPage />
    </div>
  );
}
