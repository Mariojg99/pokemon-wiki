import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardPokemon from './CardPokemon';
import Pagination from './Pagination';

const CardList = (props) => {
    const { pokemons, loading, page, setPage, total } = props;

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
      };
    
      const nextPage = () => {
        const nextPage = Math.min(page + 1, total - 1);
        setPage(nextPage);
      };
  return (
    <Container>
        <Row>
            {   
                loading ?
                    <div className='text-center my-5'>
                        <img src='https://i.pinimg.com/originals/f9/7f/5c/f97f5c6510994f677877b08320475008.gif' alt='cargando' width={150}/>
                        <h2>Cargando...</h2>
                    </div>
                :
                pokemons.map((pokemon, index) => (
                    <Col>
                        <CardPokemon
                            key={pokemon.name}
                            pokemon={pokemon}
                        />
                    </Col>
                ))
            }
        </Row>
            <Pagination 
                page={page+1}
                totalPages={total}
                previousClick={lastPage}
                nextClick={nextPage}
            />
    </Container>
  )
}

export default CardList