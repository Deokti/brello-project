import "@fontsource/roboto";
import "@/shared/config/i18n/i18n";
import "./styles/index.scss";

import { RoutesView } from "@/pages";

export function App() {
  return (
    <div className="app main-theme">
      <RoutesView />
    </div>
  );
}
