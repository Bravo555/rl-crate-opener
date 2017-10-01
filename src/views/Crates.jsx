import React, { Component } from 'react';
import Crate from '../Crate';

class Crates extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h1>Choose crate to open:</h1>
				</div>
				<div className="cratesList">
					<Crate name="overdrive" onClick={this.props.onCrateClick}/>
				</div>
			</div>
		)
	}
}

export default Crates;