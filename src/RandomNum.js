import React, { Component } from "react";

class RandomNum extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ num: Math.floor(Math.random() * 10) + 1 });

    // return num;
  }

  render() {
    return (
      <div>
        <h1>Number is {this.state.num} </h1>
        {this.state.num === 7 && <h2>You Win!!</h2>}
        <div>
          <button onClick={this.handleClick}>Click</button>
        </div>
      </div>
    );
  }
}

export default RandomNum;
