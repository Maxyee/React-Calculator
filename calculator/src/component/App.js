import React, { Component } from 'react';
import Display from "./Display.js";
import ButtonPanel from "./ButtonPanel.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="component-app">
        <Display/>
        <ButtonPanel/>
      </div>
    );
  }
}

export default App;
