import React from 'react';
import './card-style.css';

const Card = (props) => (
	<div className='Card'>
		<div>
			<h3>{props.card.title}</h3>
			<p>{props.card.content}</p>
		</div>

		<button type='button'>delete</button>
	</div>
);

export default Card;
