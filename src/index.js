import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import Store from "./redux/Store";

import registerServiceWorker from "./registerServiceWorker";
const store = Store({});


render(
<Provider store={store}>
  <App />
</Provider>,
  document.getElementById("root"));
registerServiceWorker();
