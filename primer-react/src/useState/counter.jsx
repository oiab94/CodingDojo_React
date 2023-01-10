import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };
  }

	// *Con esto tenemos acceso al state y podemos cambiarlo
  handleClick = () => this.setState({ clickCount: this.state.clickCount + 1 });

  render() {
    return (
      <div>
        {this.state.clickCount}
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
