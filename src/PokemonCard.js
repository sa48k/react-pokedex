import React, { useState, useEffect } from 'react'
import { Col, Card, CardBody, CardTitle, CardSubtitle, Badge, ListGroup, ListGroupItem } from 'reactstrap'

function PokemonCard({ pokemon }) {
    // const [currentPokemon, setCurrentPokemon] = useState(); // TODO: this doesn't need to be in state at all
    // get full data for pokemon
    // useEffect(() => {
        // let pokemonId = pokemon.url.split('/').at(-2)
        // let url = './json/' + pokemonId.padStart(3, '0') + '.json' // must be in /public to work, not /src
        // fetch(url)
        //   .then(res => res.json())
        //   .then(result => setCurrentPokemon(result))
    // }, []);
    
    // if (!currentPokemon) return null
    return (
      <Col>
            <Card className="border border-dark" key={pokemon.index}>
                <img className="pokemonimg mx-auto" src={pokemon.image_url} />
                <CardBody >
                    <CardTitle className="success">
                        {pokemon.name.toUpperCase()}
                    </CardTitle>
                    <CardSubtitle>
                        {pokemon.types.map(type => <Badge>{type}</Badge>)}
                    </CardSubtitle>
                    
                </CardBody>
          </Card>
      </Col>
  )
}

export default PokemonCard