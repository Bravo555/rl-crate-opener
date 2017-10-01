import React from 'react';

const Opening = ({crate, onBackClick}) => (
	<div>
		<h1>Opening crate:</h1>
		<h2>{crate.description}</h2>

		<div>You got: {crate.items[Math.round(Math.random() * (crate.items.length - 1))]}</div>
		<button onClick={onBackClick}>Back to preview</button>
	</div>
);

export default Opening;