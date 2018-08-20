import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
