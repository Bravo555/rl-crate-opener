import React, { Component } from 'react';
import crateTypes from '../crateTypes';

import './Preview.css';

class Preview extends Component {	
	constructor(props) {
		super(props);
		this.state = {
			crateType: crateTypes.reduce(crate => crate.type === props.crateType)
		}
	}
	
	render() {
		return (
			<div className="crate-preview">
				<h1>
					{this.state.crateType.description}
				</h1>
				<h2>Contents:</h2>
				<div className="crate-contents">
					{this.state.crateType.items.map(item => (
						<div className="crate-item">{item}</div>
					))}
				</div>
				<button onClick={this.props.onBackClick}>Back to crates</button>
			</div>
		);
	}
}

export default Preview;