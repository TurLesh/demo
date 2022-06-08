import React from 'react';
import CardData from './content/CardData'
import CardComponent from './content/CardComponent'

const Home = () => {
  return(
    <>     
    <div className='wrapper'>
      <h1>Equipment of the Ukrainian Forces</h1>
      {CardData.map(weapon => (<CardComponent key={weapon.item} weapon={weapon} />))}
    </div>
    </>
  )
}

export default Home;