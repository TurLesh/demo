import React from 'react';
import '../../css/contentStyle/CardStyle.css';
import './CardData';

export default function CardComponent(props){
    const{itemDescription, item, itemImg} = props.weapon;
    return(
        <div className='cardWrapper'>
            <img src={itemImg}/>
            <h2>{item}</h2>
            <h3>{itemDescription}</h3>
            <button className='cardBtn'>Learn More</button>
        </div>
    ) 
}