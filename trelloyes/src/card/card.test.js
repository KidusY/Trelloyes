import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import renderer from 'react-test-renderer';

it('Card smoke Test ', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Card />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('Card smoke snapshot test', () => {
	const card = renderer.create(<Card />).toJSON();
	expect(card).toMatchSnapshot();
});
