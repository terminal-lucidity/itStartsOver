//Sample React class with states

import React from "react";

class RandomInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const incNot = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    return (
      <div>
        <br></br>
        <p>I did nothing: {this.state.count} times!!</p>
        <button onClick={incNot}>Click me</button>
      </div>
    );
  }
}

export default RandomInfo;