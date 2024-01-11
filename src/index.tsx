import ReactDOM from "react-dom/client";
import App from "@/app/App/App";

import "@fontsource/roboto";
import "@/app/styles/index.scss";
import "@/shared/config/i18n/i18n.ts";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(<App />);
