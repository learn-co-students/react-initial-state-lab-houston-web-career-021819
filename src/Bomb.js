// your Bomb code here!
import React from "react";

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsLeft: this.props.initialCount };

    setInterval(this.decrementOne, 1000);
  }

  render() {
    return (
      <div>
        {this.state.secondsLeft === 0
          ? "Boom!"
          : this.state.secondsLeft + " seconds left before I go boom!"}
      </div>
    );
  }

  decrementOne = () => {
    this.setState({ secondsLeft: this.state.secondsLeft - 1 });
  };
}
