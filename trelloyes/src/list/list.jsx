import React from 'react';
import "./list-style.css";
import Card from '../card/card'


const List = (props) => (
    <div className='list'>

        <header><h1>{props.header}</h1></header>
        {
            props.list.map((id) => <Card card={props.cards[id]} key={id} />)
        } 

    </div>

       


);

export default List;