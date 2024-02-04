import "@fontsource/roboto";
import "@/shared/config/i18n/i18n";
import "./styles/index.scss";
import SocialIcon from "./social-icon.svg?react";

import { Button } from "@/shared/ui/Button";

export function App() {
  return (
    <div className="app main-theme">
      <Button
        style={{ margin: 20 }}
        disabled
      >
        Get started
      </Button>

      <Button
        leftIcon={<SocialIcon />}
        color="secondary"
        variant={"outlined"}
      >
        Sign up with Google
      </Button>
    </div>
  );
}
