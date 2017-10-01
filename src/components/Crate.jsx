import React from 'react';
import PropTypes from 'prop-types';
import crateTypes from '../crateTypes.js';
import './Crate.css';

const Crate = ({ name, onClick }) => (
		<div className={`crate crate-${name}`} onClick={() => onClick(name)}>
			<div className="crate-desc">{crateTypes.reduce(crate => crate.name === 'overdrive').description}</div>
		</div>
);

Crate.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Crate;