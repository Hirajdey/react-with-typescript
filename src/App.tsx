import React from 'react';
import './App.css';
import pizzasData from './components/data/pizzas.json';
import Pizzas from './components/pizza/Pizza';
import Cart from './components/cart';

import AppStateProvider from './components/AppState'; 

const App = () =>{
  return(
    <AppStateProvider>
      <div className="pizzasRow">
        <div>
          <Cart/>
        </div>

        {
          pizzasData.map(pizza =>(
            <Pizzas key={pizza.id} pizza={pizza}/>
          ))
        }
      </div>
    </AppStateProvider>
  )
}

export default App;

