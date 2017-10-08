import React from 'react';
import './Crate.css';

const Crate = ({ crate, onClick }) => (
		<div
			className={`crate crate-${crate.name.toLowerCase()}`}
			onClick={() => onClick(crate)}
		>
			<div className="crate-desc">
				{crate.name + ' crate'}
			</div>
		</div>
);

export default Crate;
