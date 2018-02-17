import React, { Component } from 'react';
import NavBar from './NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider >
          <NavBar title={"Air Trading"}/>
          <Main />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
