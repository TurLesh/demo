import React from 'react';
import {Link} from 'react-router-dom'
import imcontact from '../images/imagecontact.png'
import '../css/ContactStyle.css'
import Texfield from '@mui/core';

function Contact(){
    return(
        <React.Fragment>
            <img src={imcontact} alt='imcontact' className='imgcontact'/>
            <Textfield id="standard-basic" label="Standard" variant="standard" />
        </React.Fragment>        
    )
}

export default Contact;