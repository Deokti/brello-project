import "@fontsource/roboto";
import "@/shared/config/i18n/i18n";
import "./styles/index.scss";
import SocialIcon from "./social-icon.svg?react";

import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { useState } from "react";

export function App() {
  const [email, setEmail] = useState("");

  return (
    <div className="app main-theme">
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button disabled>Get started</Button>

      <Button
        leftIcon={<SocialIcon />}
        color="secondary"
        variant={"outlined"}
      >
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {/* eslint-disable-next-line i18next/no-literal-string */}
        Sign up with Google
      </Button>

      <Input
        placeholder={"Enter your email"}
        value={email}
        leftIcon={<SocialIcon />}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        placeholder={"Enter your email"}
        disabled
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        placeholder={"Enter your email"}
        label={"Email"}
        rightIcon={<SocialIcon />}
        errorMessage={"Must be a valid email."}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
    </div>
  );
}
