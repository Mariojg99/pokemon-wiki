import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import CardPokemon from './CardPokemon';

const CardList = ({results}) => {
  return (
    <Container>
        <h1>Pokemon</h1>
        <Row className='mt-3' sm={4}>
            {
                results.map(pokemon => (
                    <Col>
                        <CardPokemon key={pokemon.name}
                            nombre={pokemon.name}
                            url={pokemon.url}
                        />
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}

export default CardList