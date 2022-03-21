import React, { useEffect, useState } from 'react';
import { getPokeData, getPokemon, searchPokemon } from '../helpers/API';
import CardList from './CardList';
import SearchForm from './SearchForm';

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [searching, setSearching] = useState(false);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);

    const fetchPokemon = async () => {
        setLoading(true);
        const data = await getPokemon(25, 25 * page);
        console.log(data);
        const promises = data.results.map(async (pokemon) => {
            return await getPokeData(pokemon.url)
        });
        const results = await Promise.all(promises);
        setPokemons(results);
        setLoading(false);
        setTotal(Math.ceil(data.count / 25));
        setNotFound(false)
    }

    useEffect(() => {
        if (!searching) {
            fetchPokemon();
        }
    }, [page]);

    const onSearch = async (pokemon) => {
        if (!pokemon) {
            return fetchPokemon();
        }
        setLoading(true);
        setNotFound(false);
        setSearching(true);
        const result = await searchPokemon(pokemon);
        if (!result) {
            setNotFound(true);
            setLoading(false);
            return;
        }
        else {
            setPokemons([result]);
            setPage(0);
            setTotal(1);
        }
        setLoading(false);
        setSearching(false);
    }

    return (
        <div>
            <SearchForm onSearch={onSearch} />
            {
                notFound ?
                    <h1>No se encontró el Pokemon que buscas</h1>
                    :
                    <CardList
                        loading={loading}
                        pokemons={pokemons}
                        page={page}
                        setPage={setPage}
                        total={total}
                    />
            }

            
        </div>


    )
}

export default Home