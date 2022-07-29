import React, { useState, useEffect } from 'react'
import { Col, Card, CardBody, CardTitle, CardSubtitle, Badge, ListGroup, ListGroupItem } from 'reactstrap'

function PokemonCard({ pokemon }) {
    const [currentPokemon, setCurrentPokemon] = useState();
    // get full data for pokemon
    useEffect(() => {
        let pokemonId = pokemon.url.split('/').at(-2)
        let url = './json/' + pokemonId.padStart(3, '0') + '.json'
        fetch(url)
          .then(res => res.json())
          .then(result => setCurrentPokemon(result))
    }, []);
    
    if (!currentPokemon) return null
    return (
      <Col>
            <Card className="border border-dark" key={currentPokemon.index}>
                <img className="pokemonimg mx-auto" src={currentPokemon.image_url} />
                <CardBody >
                    <CardTitle className="success">
                        {currentPokemon.name.toUpperCase()}
                    </CardTitle>
                    <CardSubtitle>
                        {currentPokemon.types.map(type => <Badge>{type}</Badge>)}
                    </CardSubtitle>
                    
                </CardBody>
          </Card>
      </Col>
  )
}

export default PokemonCard