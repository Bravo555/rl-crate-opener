import React from 'react';
import PropTypes from 'prop-types';

import crateTypes from './crateTypes.js';

import './Crate.css';

const Crate = ({ name }) => (
	<a href="#">
		<div className={`crate crate-${name}`}>
			<div className="crate-desc">{crateTypes.reduce(crate => crate.name === 'overdrive').description}</div>
		</div>
	</a>
);

Crate.propTypes = {
	name: PropTypes.string.isRequired
};

export default Crate;