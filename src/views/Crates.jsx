import React, { Component } from 'react';
import Crate from '../components/Crate';
import crateTypes from '../crateTypes';
import './Crates.css';

class Crates extends Component {
	render() {
		return (
			<div>
				<div>
					<h1>Choose crate to open:</h1>
				</div>
				<div className="cratesList">
					{crateTypes.map(crate => (
						<Crate
							crate={crate} key={crate.name} onClick={this.props.onCrateClick}
						/>
					))}
				</div>
			</div>
		)
	}
}

export default Crates;
