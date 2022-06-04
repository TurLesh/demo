import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../css/FooterStyle.css';

function Footer(){
    return(
        <footer>
            <div className='container container-flex'>
                <div className='icons'>
                    <InstagramIcon className='icon'/>
                    <FacebookIcon className='icon'/>
                    <TwitterIcon className='icon'/>
                    <GitHubIcon className='icon'/>
                </div>
                <div className='line'>
                    <hr/>
                </div>
                <div className='copyright'>
                    <p>Віримо в ЗСУ</p>
                    <p>All rights reserved &copy;</p>
                </div>
            </div>
        </footer>               
    )
}

export default Footer;