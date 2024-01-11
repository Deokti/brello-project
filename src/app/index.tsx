import { useTranslation } from "react-i18next";

import "@fontsource/roboto";
import "@/shared/config/i18n/i18n";
import "./styles/index.scss";

export function App() {
  const { t, i18n } = useTranslation("common");

  const onSelectedLang = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <>
      <ul style={{ display: "flex", gap: 10, justifyContent: "center", padding: 0 }}>
        <li onClick={() => onSelectedLang("ru")}>
          <button>RU</button>
        </li>
        <li onClick={() => onSelectedLang("en")}>
          <button>EN</button>
        </li>
      </ul>
      <div style={{ marginTop: 20 }}>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </div>
    </>
  );
}
