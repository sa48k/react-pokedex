import React, { useState } from 'react'
import { Col, Container } from 'reactstrap'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import AllPokemon from './json/allpokemon.js'
import AllTypes from './json/typechart'
import PokemonGrid from './PokemonGrid'
import Header from './Header'
import TypesGrid from './TypesGrid'

function App() {
  const [pokemons, setPokemons] = useState(AllPokemon)
  // debugger;
  return (
    <div className="App">
      <Header />
      <div className="container">
        <TypesGrid typechart={AllTypes} />
        <PokemonGrid pokemons={pokemons} />
      </div>
    </div>
  );
}

export default App;
