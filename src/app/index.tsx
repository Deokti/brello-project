import "@fontsource/roboto";

import { RoutesView } from "@/pages";

import "@/shared/config/i18n/i18n";

import "./styles/index.scss";

export function App() {
  return (
    <div className="app main-theme">
      <RoutesView />
    </div>
  );
}
