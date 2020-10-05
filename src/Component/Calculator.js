import React, { Component } from "react";

export class Calc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: ""
    };
  }

  DisplayNumber = (e) => {
    if (e === "=") {
      this.setState({ result: (eval(this.state.result) || "") + "" });
    } else if (e === "C") {
      this.setState({ result: "" });
    } else if (e === "x") {
      this.setState({
        result: this.state.result.slice(0, -1)
      });
    } else {
      this.setState({
        result: this.state.result + e
      });
    }
  };

  render() {
    return (
      <div>
        <p className="result">{this.state.result}</p>
        <br />
        <button
          onClick={(e) => {
            this.DisplayNumber(e.target.name);
          }}
          name="C"
        >
          C
        </button>
        <button
          onClick={(e) => {
            this.DisplayNumber(e.target.name);
          }}
          name="*"
        >
          *
        </button>
        <button
          onClick={(e) => {
            this.DisplayNumber(e.target.name);
          }}
          name="x"
        >
          x
        </button>
        <button
          onClick={(e) => {
            this.DisplayNumber(e.target.name);
          }}
          name="/"
        >
          /
        </button>
        <br />
        <button
          name="7"
          onClick={(e) => {
            this.DisplayNumber(e.target.name);
          }}
        >
          7
        </button>
        <button
          onClick={(e) => {
            this.DisplayNumber(e.target.name);
          }}
          name="8"
        >
          8
        </button>
        <button
          onClick={(e) => {
            this.DisplayNumber(e.target.name);
          }}
          name="9"
        >
          9
        </button>
        <button
          onClick={(e) => {
            this.DisplayNumber(e.target.name);
          }}
          name="-"
        >
          -
        </button>
        <br />
        <button
          name="4"
          onClick={(e) => {
            this.DisplayNumber(e.target.name);
          }}
        >
          4
        </button>
        <button
          name="5"
          onClick={(e) => {
            this.DisplayNumber(e.target.name);
          }}
        >
          5
        </button>
        <button
          name="6"
          onClick={(e) => {
            this.DisplayNumber(e.target.name);
          }}
        >
          6
        </button>
        <button
          name="+"
          onClick={(e) => {
            this.DisplayNumber(e.target.name);
          }}
        >
          +
        </button>
        <br />
        <button
          name="1"
          onClick={(e) => {
            this.DisplayNumber(e.target.name);
          }}
        >
          1
        </button>
        <button
          name="2"
          onClick={(e) => {
            this.DisplayNumber(e.target.name);
          }}
        >
          2
        </button>
        <button
          name="3"
          onClick={(e) => {
            this.DisplayNumber(e.target.name);
          }}
        >
          3
        </button>
        <button
          name="="
          onClick={(e) => {
            this.DisplayNumber(e.target.name);
          }}
        >
          =
        </button>
      </div>
    );
  }
}

export default Calc;
