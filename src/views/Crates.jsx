import React, { Component } from 'react';
import Crate from '../components/Crate';
import './Crates.css';

class Crates extends Component {
	render() {
		return (
			<div>
				<div>
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