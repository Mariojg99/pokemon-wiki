import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { URL_SEARCH } from '../helpers/url';
import '../styles/PokemonDetail.css'


const PokemonDetail = () => {
    const [pokeDetail, setPokeDetail] = useState({})
    const {id} = useParams();
    console.log(id);

    const getPokemonData = async (id) => {
        const resp = await fetch(URL_SEARCH + id);
        const data = await resp.json();
        console.log(data);
        setPokeDetail(data);
    }

    useEffect(() => {
        getPokemonData(id);
    }, [])

    return (
        <div className={`p-3 ${pokeDetail.types[0].type.name}`}>
            <div className='pokedetail_container'>
                <div className='text-center'>
                    <img src={pokeDetail.sprites.front_default} alt={pokeDetail.name} width={300}/>
                    <h2>{pokeDetail.name}</h2>
                    <h5>Type: {pokeDetail.types[0].type.name}</h5>
                </div>
                <Row className='mt-3'>
                    <Col>
                        <h4 className='text-center'>About </h4>
                        <Row>
                            <Col sm={7}>
                                <p>Base Experience: </p>
                                <p>Height: </p>
                                <p>Weight: </p>
                            </Col>
                            <Col>
                                <p>{pokeDetail.base_experience}</p>
                                <p>{pokeDetail.height}</p>
                                <p>{pokeDetail.weight}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <h4 className='text-center'>Abilities</h4>
                        <ul>
                            {
                                pokeDetail.abilities.map(ability => (
                                    <li>{ability.ability.name}</li>
                                ))
                            }
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4 className='text-center'>Moves</h4>
                        <div className='pokeMoves_container mt-2'>
                            <ul>
                                {
                                    pokeDetail.moves.map(move => (
                                        <li>{move.move.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <h4 className='text-center'>Held Items</h4>
                        <ul>
                            {
                                pokeDetail.held_items.map(item => (
                                    <li>{item.item.name}</li>
                                ))
                            }
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default PokemonDetail