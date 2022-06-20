import "./styles.css";
import { StrictMode } from "react";
import { render } from "react-dom";

import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store/store";

const rootElement = document.getElementById("root");

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
