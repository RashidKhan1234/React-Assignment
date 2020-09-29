import React from "react";

function Tbody() {
  let List = [
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
  function clickHandler(personId) {
    List = List.filter((p) => p.id !== personId);
    console.log(List);
  }
  let fList = List.map((pers, index) => (
    <tr key={pers.id}>
      <td id="Name">{pers.Name}</td>
      <td>{pers.SN}</td>
      <button className="dltButton" onClick={() => clickHandler(pers.id)}>
        Delete
      </button>
    </tr>
  ));
  return <React.Fragment> {fList}</React.Fragment>;
}
export default Tbody;
