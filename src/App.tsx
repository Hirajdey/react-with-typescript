import React from 'react';
import './App.css';
import pizzasData from './components/data/pizzas.json';
import Pizzas from './components/pizza/Pizza';

const App = () =>{
  return(
    <div className="pizzasRow">
      {
        pizzasData.map(pizza =>(
          <Pizzas key={pizza.id} pizza={pizza}/>
        ))
      }
    </div>
  )
}

export default App;

