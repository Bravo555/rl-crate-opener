import React, { Component } from 'react';
import Crates from './views/Crates';
import Preview from './views/Preview';
import Opening from './views/Opening';
import crateTypes from './crateTypes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'crates',
      inventory: []
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
        onOpenClick={() => this.setState({currentScreen: 'opening'})}
        crateType={this.state.crateType}
      />
      break;

    case 'opening':
      screen = <Opening
        crate={this.state.crateType}
        onBackClick={() => this.setState({currentScreen: 'preview'})}
        onRandomizingDone={(randomizedItem) => this.setState({inventory: [...this.state.inventory, randomizedItem]})}
      />
      break;

    default:
      screen = <Crates />
    }
  
    return screen;
  }
}

export default App;
