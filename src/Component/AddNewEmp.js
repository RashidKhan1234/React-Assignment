import React, { Component } from "react";
import TBodyClass from "./TBodyWithState";
class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    alert(`${this.state.name} ${this.state.job}`);
    event.preventDefault();
  };
  render() {
    return (
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
          Submit
        </button>
      </form>
    );
  }
}

export default AddForm;
