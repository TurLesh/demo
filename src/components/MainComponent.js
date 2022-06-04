import React from 'react'
import List from './ListComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import About from './AboutComponent'
import Contact from './ContactComponent'
import Malyuk from './content/Malyuk'
import Error from './ErrorComponent'

import {Routes, Route} from 'react-router-dom'

function Main(){
    return(
        <React.Fragment>

            <List/>

            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/malyuk' element={<Malyuk/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>

            <Footer/>

        </React.Fragment>
    )
}

export default Main;