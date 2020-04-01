import React from 'react';
import './App.css';
import List from './list/list';

class App extends React.Component {
	constructor () {
		super();
		this.state = {
			lists    : [
				{
					id      : '1',
					header  : 'First list',
					cardIds : [
						'a',
						'b',
						'e',
						'f',
						'g',
						'j',
						'l',
						'm'
					]
				},
				{
					id      : '2',
					header  : 'Second list',
					cardIds : [
						'b',
						'c',
						'd',
						'f',
						'h',
						'i',
						'k'
					]
				},
				{
					id      : '3',
					header  : 'Third list',
					cardIds : [
						'a',
						'b',
						'c',
						'd',
						'e',
						'f',
						'g',
						'h',
						'i',
						'j',
						'k',
						'l',
						'm'
					]
				},
				{
					id      : '4',
					header  : 'Fourth list',
					cardIds : [
						'l',
						'm'
					]
				}
			],
			allCards : {
				a : { id: 'a', title: 'First card', content: 'lorem ipsum' },
				b : { id: 'b', title: 'Second card', content: 'lorem ipsum' },
				c : { id: 'c', title: 'Third card', content: 'lorem ipsum' },
				d : { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
				e : { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
				f : { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
				g : { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
				h : { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
				i : { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
				j : { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
				k : { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
				l : { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
				m : { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' }
			},
			filtered : []
		};
	}

	addCard = (id) => {
		const { lists } = this.state;
		for (let list of lists) {
			if (list.id == id) {
				console.log(list.id);
			}
		}
	};

	render () {
		const lists = this.state.lists.map((list) => (
			<List
				id={list.id}
				cardIds={list.cardIds}
				cards={this.state['allCards']}
				header={list.header}
				key={list.id}
				addCard={this.addCard}
			/>
		));
		return (
			<div className='App'>
				<div className='listContainer'>{lists}</div>
			</div>
		);
	}
}

export default App;
