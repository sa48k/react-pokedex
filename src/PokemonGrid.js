import React, { useEffect } from 'react'
import PokemonCard from './PokemonCard'
import { Col, Container, Card, ListGroup, ListGroupItem, Row } from 'reactstrap'

function PokemonGrid({ pokemons }) {
  // const getIdFromUrl = (url) => url.split('/').at(-2)

  const rows = [...Array(Math.ceil(pokemons.length / 4))]
  const pokemonRows = rows.map((row, idx) => pokemons.slice(idx * 4, idx * 4 + 4));
  
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