import React from 'react'
import { Card } from 'react-bootstrap'
import { useFetch } from '../hooks/useFetch'

export const CardPokemon = ({url}) => {

   const estado = useFetch(url);
   const {cargando, data} = estado;
    return (
        <>
            {
                cargando
                ?
                <div className='text-center my-5'>
                    <img src='https://i.pinimg.com/originals/f9/7f/5c/f97f5c6510994f677877b08320475008.gif' alt='cargando'/>
                    <h1>Cargando...</h1>
                </div>
                :
                <Card border="primary" style={{ width: '16rem' }} className='m-2'>
                    <Card.Header>{data.id}</Card.Header>
                    <Card.Body>
                        <Card.Img src={data.sprites.front_default} alt='pokemon'/>
                        <Card.Title>{data.forms[0].name}</Card.Title>
                    </Card.Body>
                </Card>
            }
        </>
    )
}
