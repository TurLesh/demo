import React from 'react';
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../css/ListStyle.css';

function List(){
    return(
        <header>
            <div className='container container-flex'>
                <div className='logoContainer'>
                    <img src={logo} alt='logo' className='logo'/>
                </div>
                <nav>
                    <div className='list'>
                        <NavLink exact to='/' className={({isActive})=> (isActive ? 'active-item':'not-active-item')}>Home</NavLink>
                        <NavLink to='/about' className={({isActive})=> (isActive ? 'active-item':'not-active-item')}>About</NavLink>
                        <NavLink to='/contact' className={({isActive})=> (isActive ? 'active-item':'not-active-item')}>Contact</NavLink>
                    </div>
                </nav>
                <div className='icons'>
                    <SearchIcon className='icon'/>
                    <AccountCircleIcon className='icon'/>
                </div>
            </div>
        </header>       
    )
}

export default List;