import React from 'react';
import ReactDom from 'react-dom';
import '../css/CardStyle.css';
import '../components/content/CardData'

export default function CardComponent({item, itemDescription}){
    return(
        <div>
        <h2>{item}</h2>
        <h3>{itemDescription}</h3>
        </div>
    ) 
}