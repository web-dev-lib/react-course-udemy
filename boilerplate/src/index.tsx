import * as React from "react";
import * as ReactDOM from "react-dom";
import Banner from "./components/Banner";
import "./styles/global.scss";

ReactDOM.render(
  <div>
    <Banner name="Sergei" />
  </div>,
  document.getElementById("root")
);
