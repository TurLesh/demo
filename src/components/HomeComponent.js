import React from 'react';
import Malyuk from '../images/Malyuk.png';
import {NavLink} from 'react-router-dom';
import '../css/HomeStyle.css'
import ak47 from '../images/ak47.png'
import aks74u from '../images/aks74u.png'

function Home(){
    return(
        <div className='homePage'>
        <h1>List of weapons of the Ukraine military forces</h1>
        <div className='weapons'>
            <div className='card'>
                <h2>Malyuk</h2>
                <img src={Malyuk} alt='weapon1' className='weaponImg'/>
                <p>Malyuk is also known as Vulcan or Vulkan-M. Assault rifle developed by the Ukrainian arms company Interproinvest (IPI).</p>
                <div className='btnBox'>
                    <div className='btn'>
                        <NavLink to='/malyuk' className='learnMore'>Learn More</NavLink>
                    </div>
                </div>
            </div>
            <div className='card'>
                <h2>AK-47</h2>
                <img src={ak47} alt='weapon2' className='weaponImg'/>
                <p>Officially known as the Avtomat Kalashnikova. Developed in the Soviet Union by Russian small-arms designer Mikhail Kalashnikov.</p>
                <div className='btnBox'>
                    <div className='btn'>
                        <NavLink to='/ak47' className='learnMore'>Learn More</NavLink>
                    </div>
                </div>
            </div>
            <div className='card'>
                <h2>AKS-74u</h2>
                <img src={aks74u} alt='weapon3' className='weaponImg'/>
                <p>The Kalashnikov AKS-74U compact assault rifle, known as the “Krink” or “Krinkov” was officially adopted by the Soviet army in 1978.</p>
                <div className='btnBox'>
                    <div className='btn'>
                        <NavLink to='/aks74u' className='learnMore'>Learn More</NavLink>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;