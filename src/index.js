import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";

import { configureStore } from "./modules";
import App from "@routes/App";
import { initI18n } from "@config/i18n";

import "@styles/font.scss";
import "@styles/reset.scss";
import "@styles/common.scss";
import "@styles/style.scss";
import "@styles/components.scss";

console.log(
  `You are running this application in ${process.env.NODE_ENV} mode.`
);

const store = configureStore();

initI18n();

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

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
