import React from 'react';
import "./list-style.css";
import Card from '../card/card'


const List = (props) => {
   const cards = props.cardIds.map((id) => <Card card={props.cards[id]} key={id} />)
    return( <div className='list'>

        <header><h1>{props.header}</h1></header>
        {  cards  }

    </div>
    )
       


};

List.defaultProps = {
    cards:[]
}
export default List;