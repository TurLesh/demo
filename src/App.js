import Main from './components/MainComponent'
import {BrowserRouter} from 'react-router-dom'
import CardData from './components/content/CardData';
import CardComponent from './components/CardComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main/>
        <div className='wrapper'>
          <h1>Weapons</h1>
          {CardData.map(weapon => (<CardComponent key={weapon.item} item={weapon.item} itemDescription={weapon.itemDescription}/>))}
        </div>
      </BrowserRouter>    
    </div>
  );
}

export default App;