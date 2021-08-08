import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./App.js";
import ErrorBoundary from "./ErrorBoundary";
import store from "./store/store";
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>            { /*   ??   */}
    <Provider store={store}> 
      <Router>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
