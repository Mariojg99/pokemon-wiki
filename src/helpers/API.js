// export const API_URL = 'https://pokeapi.co/api/v2/ability/?limit=25&offset=25';
// export const API_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=25';
// export const URL_BASE = 'https://pokeapi.co/api/v2/';
// export const URL_SEARCH = 'https://pokeapi.co/api/v2/pokemon/';

export const searchPokemon = async (pokemon) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

export const getPokemon = async (limit = 25, offset = 0) => {
    let url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

export const getPokeData = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}