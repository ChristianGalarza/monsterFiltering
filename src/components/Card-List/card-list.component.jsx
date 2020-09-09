import React from 'react'

import {Card} from '../Card/card.component'

import './card-list.styles.css'

export const CardList = (props) =>(
    <div className="cardlist">
        {
            props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
        ))} 
    </div>
)