import React from 'react';
import ReactDom from 'react-dom';
import '../css/CardStyle.css';
import '../components/content/CardData'

export default function CardComponent(props){
    const {item} = props;
    return <h2>{item}</h2>
}