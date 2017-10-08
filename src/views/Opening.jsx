import React, {Component} from 'react';

class Opening extends Component {
	componentWillMount() {
		const randomizedItem = this.props.crate.items[
			Math.round(Math.random() * (this.props.crate.items.length - 1))];
		this.setState({ randomizedItem: randomizedItem})

		this.props.onRandomizingDone(randomizedItem);
	}
	render() {
		return (
			<div>
				<h1>Opening crate:</h1>
				<h2>{this.props.crate.description}</h2>

				<div>You got: {this.state.randomizedItem}</div>
				<button onClick={this.props.onBackClick}>Back to preview</button>
			</div>
		);
	}
};

export default Opening;
