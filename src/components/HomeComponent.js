import { LocalPrintshopSharp } from '@mui/icons-material';
import React from 'react';
import Malyuk from '../images/Malyuk.jpg';
import {NavLink} from 'react-router-dom';

function Home(){
    return(
        <React.Fragment>
        <h1>List of weapons of the Ukraine military forces</h1>
        <div className='weapons'>
            <div className='card'>
                <h2>Malyгk</h2>
                <img src={Malyuk} alt='weapon1'/>
                <p>Also known as Vulcan or Vulkan-M. Assault rifle developed by the Ukrainian arms company Interproinvest (IPI).</p>
                <div className='btnBox'>
                    <div className='btn'>
                        <NavLink to='/malyuk' className='readMore'>Read More</NavLink>
                    </div>
                </div>
            </div>
            <div className='card'>
                <h2>Malyгk</h2>
                <img src={Malyuk} alt='weapon1'/>
                <p>Also known as Vulcan or Vulkan-M. Assault rifle developed by the Ukrainian arms company Interproinvest (IPI).</p>
                <div className='btnBox'>
                    <div className='btn'>
                        <NavLink to='/malyuk' className='readMore'>Read More</NavLink>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Home;