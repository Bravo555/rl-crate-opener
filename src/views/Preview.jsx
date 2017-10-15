import React from 'react';
import Item from '../components/Item';
import './Preview.css';

const Preview = ({crateType, onBackClick, onOpenClick}) => (
	<div className="crate-preview">
		<h1>
			{crateType.name + ' crate'}
		</h1>
		<h2>Contents:</h2>
		<div className="crate-contents">
			{crateType.items.map(item => (
				<Item key={item.name} item={item}/>
			))}
		</div>
		<button onClick={onOpenClick}>Open</button>
		<button onClick={onBackClick}>Back to crates</button>
	</div>
);

export default Preview;
