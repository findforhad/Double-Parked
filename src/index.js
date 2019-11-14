import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
