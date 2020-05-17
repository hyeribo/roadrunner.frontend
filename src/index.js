import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";

import App from "@routes/App";

import "@styles/reset.scss";
import "@styles/common.scss";
import "@styles/style.scss";
import "@styles/components.scss";

const render = (component) => {
  const Component = hot(component);
  ReactDOM.render(<Component />, document.getElementById("root"));
};
render(App);
