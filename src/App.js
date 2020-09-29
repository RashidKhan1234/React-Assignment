import React from "react";
import "./styles.css";

import Hello from "./Component/HelloWorld";
import Table from "./Component/Assignment2";
import Style from "./Component/Table.css";
export default function App() {
  return (
    <div className="App">
      {<Hello />}
      <Table />
    </div>
  );
}
