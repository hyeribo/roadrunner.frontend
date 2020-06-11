import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import constants from "@config/constants";

import en from "./en";
import ko from "./ko";

export function initI18n() {
  const lang = localStorage.getItem(constants.LOCAL_LANG_KEY) || "ko";

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: { ko, en },
      lng: lang,
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    });

  console.log(`i18n :: initialized with language ${lang}`);
}

export function changeI18nLanguage(lang = "en") {
  localStorage.setItem(constants.LOCAL_LANG_KEY, lang);
  i18n.changeLanguage(lang);

  console.log(`i18n :: language changed to ${lang}`);
}
