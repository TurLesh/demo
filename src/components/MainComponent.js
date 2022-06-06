import React from 'react'
import List from './ListComponent'
import Footer from './FooterComponent'
import About from './AboutComponent'
import Contact from './ContactComponent'
import Malyuk from './content/Malyuk'
import Error from './ErrorComponent'
import Ak47 from './content/Ak47'
import Aks74u from './content/Aks74u'
import CardComponent from './CardComponent'


import {Routes, Route} from 'react-router-dom'

function Main(){
    return(
        <React.Fragment>

            <List/>

            <Routes>
                <Route exact path='/' element={<CardComponent/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/malyuk' element={<Malyuk/>}/>
                <Route path='/ak47' element={<Ak47/>}/>
                <Route path='/aks74u' element={<Aks74u/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>

            <Footer/>

        </React.Fragment>
    )
}

export default Main;