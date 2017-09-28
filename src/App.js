import React, { Component } from 'react';
import './App.css';
import Crate from './Crate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
			<h1>Choose crate to open:</h1>
		</div>
		<div className="cratesList">
			<Crate name="overdrive"/>
		</div>
      </div>
    );
  }
}

export default App;
