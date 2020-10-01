import React, { Component } from "react";

class TBodyClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [
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
      ],
      name: "",
      job: ""
    };
  }
  NameHandler = (event) => {
    this.setState({
      name: event.target.value
    });
  };
  JobHandler = (event) => {
    this.setState({
      job: event.target.value
    });
  };
  SubmitHandler = (event) => {
    let a = Math.max.apply(
      null,
      this.state.List.map((item) => item.id)
    );
    console.log(a + 1);

    // alert(`${this.state.name} ${this.state.job} ${a + 1}`);
    if (this.state.name === "" || this.state.job === "") {
      alert("please fill all details");
    } else {
      console.log(this.state.List);
      var items = { id: a + 1, Name: this.state.name, SN: this.state.job };
      console.log("item new");

      this.state.List.push(items);
      this.setState({
        List: this.state.List
      });
    }

    event.preventDefault();
  };

  clickHandler(personId, personName) {
    if (
      window.confirm("are you sure you want to delete record for " + personName)
    ) {
      let List = this.state.List.filter((p) => p.id !== personId);

      this.setState({
        List: List
      });
    }
  }

  render() {
    let fList = this.state.List.map((pers, index) => (
      <tr key={pers.id}>
        <td id="Name">{pers.Name}</td>
        <td>{pers.SN}</td>
        <button
          className="dltButton"
          onClick={() => this.clickHandler(pers.id, pers.Name)}
        >
          Delete
        </button>
      </tr>
    ));
    return (
      <div>
        {" "}
        {fList}
        <form onSubmit={this.SubmitHandler}>
          <div>
            <h1>Add New Employee</h1>
            <div>
              <p className="txt">name</p>
              <input
                className="inp"
                type="text"
                value={this.state.name}
                onChange={this.NameHandler}
              />
            </div>
            <br></br>
            <div>
              <p className="txt">Job</p>
              <input
                className="inp"
                type="text"
                value={this.state.job}
                onChange={this.JobHandler}
              />
            </div>
            <br></br>
          </div>
          <button className="green" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default TBodyClass;
