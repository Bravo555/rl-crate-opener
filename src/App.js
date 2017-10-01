import React, { Component } from 'react';
import Crates from './views/Crates';
import Preview from './views/Preview';
import crateTypes from './crateTypes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'crates'
    }
  }
  
  render() {
    let screen;

    switch(this.state.currentScreen) {
    case 'crates':
      screen = <Crates onCrateClick={(crateType) =>
        this.setState({ currentScreen: 'preview', crateType: crateTypes.reduce(crate => crate.type === crateType)})
      } />
      break;

    case 'preview':
      screen = <Preview
        onBackClick={() => this.setState({currentScreen: 'crates'})}
        crateType={this.state.crateType}
      />
      break;

    default:
      screen = <Crates />
    }
  
    return screen;
  }
}

export default App;
