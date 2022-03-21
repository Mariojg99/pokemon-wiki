import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap';
import '../styles/pokemon.css'

const CardPokemon = (props) => {
    const { pokemon } = props;
    const [show, setShow] = useState(false);
    return (
        <>

            <Card className='card-pokemon mx-auto' onClick={() => setShow(true)}>
                <Card.Img variant="top" src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p className='text-center'>{pokemon.id}</p>
                <Card.Body className={`${pokemon.types[0].type.name}`}>
                    <Card.Title>{pokemon.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-white">{pokemon.types[0].type.name}</Card.Subtitle>
                    {/* <Card.Link className='text-decoration-none text-danger' href="#">Ver más</Card.Link> */}
                </Card.Body>
            </Card>

            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <div className='d-flex'>
                            <img src="https://res.cloudinary.com/karma09-jm/image/upload/v1646020505/Pokemon/Pok%C3%A9_Ball_icon.svg_xfnnva.png" alt="pokemon-logo" width={50} />
                            <p className='ms-2 my-2'>Pokedex</p>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body-pokemon'>
                    <div className='text-center'>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} width={200}/>
                        <h1>{pokemon.name}</h1>                        
                    </div>
                    <Row className={`${pokemon.types[0].type.name} p-4`}>
                        <Col>
                            <h4 className='text-center bg-dark text-warning py-2'>About</h4>
                            <ul>
                                <li>Type: {pokemon.types[0].type.name}</li>
                                <li>Base Experience: {pokemon.base_experience}</li>
                                <li>Height: {pokemon.height}</li>
                                <li>Weight: {pokemon.weight}</li>
                            </ul>
                        </Col>
                        <Col>
                            <h4 className='text-center bg-dark text-warning py-2'>Abilities</h4>
                            <ul>
                                {   
                                    pokemon.abilities.map(ability => (
                                        <li>{ability.ability.name}</li>
                                    ))
                                }
                            </ul>
                        </Col>
                        <Col>
                            <h4 className='text-center bg-dark text-warning py-2'>Moves</h4>
                            <ul className='pokemon-moves'>
                                {   
                                    pokemon.moves.map(move => (
                                        <li>{move.move.name}</li>
                                    ))
                                }
                            </ul>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default CardPokemon;