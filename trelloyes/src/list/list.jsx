import React from 'react';
import './list-style.css';
import Card from '../card/card';

const List = (props) => {
	const cards = props.cardIds.map((id) => <Card card={props.cards[id]} key={id} delCard={props.delCard} />);

	return (
		<div className='list'>
			<button onClick={() => props.addCard(props.id)}> ADD Random Card </button>
			<header>
				<h1>{props.header}</h1>
			</header>
			{cards}
		</div>
	);
};

export default List;
