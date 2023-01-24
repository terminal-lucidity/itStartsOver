//Sample React class with states

import React from "react";

class RandomInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount(){
    console.log("mounted!!")
  }
  componentDidUpdate(){
    console.log("updated!!")
  }

  componentWillUnmount(){
    console.log("unmounted!!")
  }
  render() {
    const incNot = () => {
      this.setState({
        count: this.state.count + 1,
      });
      this.props.destroy(false)
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