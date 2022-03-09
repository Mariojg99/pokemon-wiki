import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import '../styles/pokemon.css'

export const CardPokemon = ({url}) => {

   const estado = useFetch(url);
   const {cargando, data} = estado;
    return (
        <>
            {
                cargando
                ?
                <div className='text-center my-5'>
                    <img src='https://i.pinimg.com/originals/f9/7f/5c/f97f5c6510994f677877b08320475008.gif' alt='cargando' width={80}/>
                </div>
                :
                <Link to={`/pokemon/${data.id}`}>
                    <Card className={`${data.types[0].type.name} mb-2 card-pokemon`}>
                        <Card.Header>{data.id}</Card.Header>
                        <Card.Body>
                            <Card.Img src={data.sprites.front_default} alt='pokemon'/>
                            <Card.Title className='text-center'>{data.forms[0].name}</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            }
        </>
    )
}
