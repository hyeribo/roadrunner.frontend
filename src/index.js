import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';

import App from '@routes/App';

import '@styles/reset.css';
import '@styles/common.scss';

const render = Component => {
  const App = hot(Component);
  ReactDOM.render(<App/>, document.getElementById("root"));
}
render(App);