import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { configureStore } from "./modules";
import App from "@routes/App";

import en from "@config/i18n/en";
import ko from "@config/i18n/ko";
import "@styles/font.scss";
import "@styles/reset.scss";
import "@styles/common.scss";
import "@styles/style.scss";
import "@styles/components.scss";

export const store = configureStore();

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: { ko, en },
    lng: "ko",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

const render = (component) => {
  const Component = hot(component);
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById("root")
  );
};
render(App);
