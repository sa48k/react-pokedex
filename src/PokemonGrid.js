import React, { useEffect } from 'react'
import PokemonCard from './PokemonCard'
import { Col, Container, Card, ListGroup, ListGroupItem, Row } from 'reactstrap'

function PokemonGrid({ pokemons, selectedTypes }) {
  const filteredPokemon = []
  for (let i = 0; i < pokemons.length; i++) {   // check to see which pokemon should be added to filteredPokemon[] based on the selectedTypes
    if (selectedTypes.some(element => pokemons[i].types.includes(element.name) && element.visible)) {
      filteredPokemon.push(pokemons[i])
    }
  }
  const rows = [...Array(Math.ceil(filteredPokemon.length / 4))]                            // init required number of empty rows
  const pokemonRows = rows.map((row, idx) => filteredPokemon.slice(idx * 4, idx * 4 + 4));  // slice 4 pokemon into each row
  const content = pokemonRows.map((row, idx) => (
    <Row key={idx}>
      {row.map(pokemon => <PokemonCard pokemon={pokemon} />)}
    </Row>)
  );

  return (
    <div>
      {content}
    </div>
  )
}

export default PokemonGrid