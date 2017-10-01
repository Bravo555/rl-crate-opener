import React from 'react';

import './Preview.css';

const Preview = ({crateType, onBackClick, onOpenClick}) => (
	<div className="crate-preview">
		<h1>
			{crateType.description}
		</h1>
		<h2>Contents:</h2>
		<div className="crate-contents">
			{crateType.items.map(item => (
				<div className="crate-item">{item}</div>
			))}
		</div>
		<button onClick={onOpenClick}>Open</button>
		<button onClick={onBackClick}>Back to crates</button>
	</div>
);

export default Preview;