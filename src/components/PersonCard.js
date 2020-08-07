import React, { Component } from 'react';

const ageButtonStyle = {
  color: 'yellow',
  background: 'gray',
  fontSize: '16px',
  height: '3em',
  width: '25em',
  borderRadius: '10px'
}
class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: (props.age)
    }

    this.ageIncreaseHandler = this.ageIncreaseHandler.bind(this);
  }

  ageIncreaseHandler = () => {
    this.setState((state) => {
      return {age: state.age + 1}
    })
  }

  render() {
    const {firstName, lastName, hairColor } = this.props;
    return (
      <>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {hairColor}</p>
        <button style={ageButtonStyle} onClick={this.ageIncreaseHandler}>Birthday Button for {firstName} {lastName}</button>
      </>
    );
  }
}

export default PersonCard;