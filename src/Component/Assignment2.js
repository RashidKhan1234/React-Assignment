import React from "react";
import TBody from "./TBodyWithState";

function Display() {
  return (
    <table id="tblMain">
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <TBody />
      </tbody>
    </table>
  );
}
export default Display;
