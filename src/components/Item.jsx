import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

const Item = ({item}) => (
	<div className="crate-item">
		<img className="item-icon" src={`items/${item.name.replace(' ', '_')}.png`} alt={item.name}/>
		<div className="item-desc">{item.name}</div>
	</div>
);

Item.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		rarity: PropTypes.string.isRequired,
	}).isRequired,
};

export default Item;
