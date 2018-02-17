import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class NavBar extends Component {
  render() {
    return (
      <AppBar
        style={
          {backgroundColor: "black"}
        }
        title={this.props.title}
      />
    );
  }
}

export default NavBar;
