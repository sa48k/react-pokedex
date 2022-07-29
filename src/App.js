import React, { useState } from 'react'
import { Col, Container } from 'reactstrap'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import allPokemon from './json/allpokemon.js'
import PokemonGrid from './PokemonGrid'

function App() {
  const [pokemons, setPokemons] = useState(allPokemon.results)
  return (
    <div className="App">
      <div className="container">
        <h1 className="display-4">Pokedex</h1>
        <PokemonGrid pokemons={pokemons} />
      </div>
    </div>
  );
}

export default App;
