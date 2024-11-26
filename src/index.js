import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./redux/store";

const container = document.getElementById("uniConnect_fe");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
