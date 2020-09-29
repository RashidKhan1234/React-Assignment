import React from "react";

function Tbody() {
  const List = [
    {
      id: 1,
      Name: "Charlie",
      SN: "Jenitor"
    },
    {
      id: 2,
      Name: "Mac",
      SN: "Bouncer"
    },
    {
      id: 3,
      Name: "Dee",
      SN: "Aspiring Actress"
    },
    {
      id: 4,
      Name: "Dennis",
      SN: "Bartender"
    }
  ];
  const fList = List.map((pers, index) => (
    <tr>
      <td>{pers.Name}</td>
      <td>{pers.SN}</td>
    </tr>
  ));
  return <> {fList}</>;
}
export default Tbody;
