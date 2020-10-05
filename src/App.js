import React from "react";
import "./styles.css";

import Hello from "./Component/HelloWorld";
import KeyPad from "./Component/btn";
import Style from "./Component/Table.css";
import result from "./Component/result";
import TBodyClass from "./Component/TBodyWithState";
import Calc from "./Component/Calculator";
import st from "./Component/Calc.css";
import eval_ from "./Component/eval";
export default function App() {
  return (
    <div className="App">
      <Hello />
      <TBodyClass />
      <Calc />
      <eval_ />
      {/* <h1>Simple Calculator</h1>
      <result />
      <KeyPad /> */}
    </div>
  );
}
