import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en";
import ko from "./ko";

const LOCAL_STORAGE_KEY = "roadrunner_lang";

export function initI18n() {
  const lang = localStorage.getItem(LOCAL_STORAGE_KEY) || "ko";

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

export function changeLanguage(lang = "en") {
  localStorage.setItem(LOCAL_STORAGE_KEY, lang);
  i18n.changeLanguage(lang);

  console.log(`i18n :: language changed to ${lang}`);
}

export default localStorage.getItem(LOCAL_STORAGE_KEY) || "ko";
