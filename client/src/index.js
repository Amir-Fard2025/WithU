import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { Provider } from "@lyket/react";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider apiKey="[pt_796c5a5efdf306e731814bcbbe19a3]"> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
