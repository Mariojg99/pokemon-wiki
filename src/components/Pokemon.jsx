import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { API_URL, URL_BASE, URL_SEARCH } from '../helpers/url'
import { useFetch } from '../hooks/useFetch'
import CardList from './CardList'

export const Pokemon = () => {
    const [url, setUrl] = useState(URL_SEARCH);
    const estado = useFetch(url);
    const {cargando, data} = estado;
    cargando 
    ? console.log('cargando...') 
    : console.log(data.results);

  return (
    <div>
        { 
            cargando
            ?
            <div className='text-center my-5'>
                <img src='https://i.pinimg.com/originals/f9/7f/5c/f97f5c6510994f677877b08320475008.gif' alt='cargando'/>
                <h1>Cargando...</h1>
            </div>
            :
            <div>
              <CardList results={data.results} />
              <Container className='my-5 text-center'>
                <Button className='me-2' variant='dark' onClick={() => setUrl(data.previous)}>Anterior</Button>
                <Button variant='dark' onClick={() => setUrl(data.next)}>Siguiente</Button>
              </Container>
            </div>

            
        }
    </div>
  )
}
