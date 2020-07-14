import React, { Component } from 'react';

class MyNewComponent extends Component {
  render() {
    return (
      <div>
        <h1>My New Component</h1>
        <h2>{this.props.someText}</h2>
      </div>
    );
  }
}

export default MyNewComponent;