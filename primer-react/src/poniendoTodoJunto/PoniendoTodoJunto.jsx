import React from "react";

class PersonalCard extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.lastName = props.lastName;
    this.hairColor = props.hairColor;
    this.state = {
      age: props.age,
    };
  }

  changeAge = () => {
    let plusAge = this.state.age + 1;
    this.setState({ age: plusAge });
  };

  render() {
    return (
      <div>
        <h1>
          {this.lastName}, {this.name}
        </h1>
        <h2>
          Age: {this.state.age}
        </h2>
        <h2>
          Hair Color: {this.hairColor}
        </h2>
        <button onClick={this.changeAge}>
          Birthday Button for {this.name} {this.lastName}
        </button>
      </div>
    );
  }
}

export default PersonalCard;
