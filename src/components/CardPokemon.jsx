import React from 'react'
import { Card } from 'react-bootstrap'
import { useFetch } from '../hooks/useFetch'

const CardPokemon = ({url}) => {

   const datos = useFetch(url)
   const {data} = datos
    return (
        <>
            <Card border="primary" style={{ width: '16rem' }} className='m-2'>
                <Card.Header>{data.id}</Card.Header>
                <Card.Body>
                    <Card.Img src={data.sprites.front_default} alt='pokemon'/>
                    <Card.Title>{data.forms[0].name}</Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardPokemon;