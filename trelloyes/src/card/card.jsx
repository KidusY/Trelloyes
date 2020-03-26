import React from 'react';
import './card-style.css';

const Card = (props) => (
	<div className='Card'>
		{console.log(props)}
		<div>
			<h3>{props.card.title}</h3>
			<p>{props.card.content}</p>
		</div>

		<button type='button'>delete</button>
	</div>
);
Card.defaultProps = {
	card : {
		id      : 'a',
		title   : 'Default Card',
		content : 'Default Content'
	}
};
export default Card;
