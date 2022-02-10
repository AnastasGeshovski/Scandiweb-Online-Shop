import React, { Component } from "react";
import "./Counter.scss";
import IncrementButtton from "../assets/IncrementButton";
import DecrementButton from "../assets/DecrementButton";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };

    this.incrementNumber = this.incrementNumber.bind(this);
  }

  incrementNumber() {
    this.setState(
      {
        number: this.state.number + 1,
      },
    );
  }

  decrementNumber = () => {
    this.setState((prevState) => ({
      number: prevState.number === 0 ? prevState.number : prevState.number - 1,
    }));
  };

  render() {
    return (
      <>
        <div className="dropdown-cart">
          <div className="wrapper__buttons-options">
            <button
              className="dropIncrementBtn"
              onClick={this.incrementNumber}
            >
              <IncrementButtton/>
            </button>
            <button
              onClick={this.decrementNumber}
              className="dropIncrementBtn"
            >
              <DecrementButton/>
            </button>
          <div className="wrapper__pieces">Pieces: {this.state.number}</div>
        </div>
          </div>
      </>
    );
  }
}