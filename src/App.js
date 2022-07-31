import React, { useState, useEffect } from 'react'
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
  const [selectedTypes, setSelectedTypes] = useState([{}]);

  useEffect(() => {
    setSelectedTypes(AllTypes)
  }, []); // fire once on start - we use this to keep track of which types are (de)selected

  // debugger;
  return (
    <div className="App">
      <Header />
      <div className="container">
        <TypesGrid setSelectedTypes={setSelectedTypes} selectedTypes={selectedTypes} />
        <PokemonGrid pokemons={pokemons} selectedTypes={selectedTypes} />
      </div>
    </div>
  );
}

export default App;
