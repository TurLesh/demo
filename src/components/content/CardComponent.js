import React from 'react';
import '../../css/contentStyle/CardStyle.css';
import './CardData';
import {useNavigate} from 'react-router-dom';

export default function CardComponent(props){
    const{itemDescription, item, itemImg, btnLink} = props.weapon;
    
    const navigate = useNavigate();

    const onNavigateHandler = () => {
        navigate(btnLink);
    };

    return(
        <div className='cardWrapper'>
            <img src={itemImg} alt='weaponImg'/>
            <h2>{item}</h2>
            <h3>{itemDescription}</h3>
            <button onClick={onNavigateHandler} className='cardBtn'>Learn More</button>
        </div>
    ) 
}