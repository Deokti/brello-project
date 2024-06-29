import { useCallback, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { useTranslation } from "react-i18next";

import FlagRussian from "@/shared/assets/flag-ru.svg?react";
import FlagUSA from "@/shared/assets/flag-us.svg?react";

import s from "./LocaleSwitcher.module.scss";

const LOCALES = [
  { id: "ru", name: "Русский", flag: <FlagRussian /> },
  { id: "en", name: "Английский", flag: <FlagUSA /> },
];

export const LocaleSwitcher = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { i18n } = useTranslation();

  const currentLocale = LOCALES.find((locale) => locale.id === i18n.language);

  const onChangeLocale = useCallback(
    (locale: string) => {
      i18n.changeLanguage(locale);
      setOpen(false);
    },
    [i18n],
  );

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className={s.root}>
        <h2
          className={s.currentLocale}
          onClick={() => setOpen(true)}
        >
          {currentLocale?.flag}
          {currentLocale?.name} | {currentLocale?.id.toUpperCase()}
        </h2>
        {isOpen && (
          <ul className={s.list}>
            {LOCALES.map((locale) => {
              return (
                <li
                  key={locale.id}
                  className={s.item}
                  onClick={() => onChangeLocale(locale.id)}
                >
                  <span className={s.id}>{locale.id.toUpperCase()}</span>{" "}
                  <span className={s.name}>{locale.name}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </ClickAwayListener>
  );
};
