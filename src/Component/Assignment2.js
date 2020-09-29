import React from "react";
import TBody from "./Tbody";

function Display() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        <TBody />
      </tbody>
    </table>
  );
}
export default Display;
