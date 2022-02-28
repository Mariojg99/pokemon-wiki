import React from 'react'
import { URL_SEARCH } from '../helpers/url'
import { useFetch } from '../hooks/useFetch'
import CardList from './CardList'

const Pokemon = () => {
    const datos = useFetch(URL_SEARCH)
    const { data } = datos
    console.log(data.results);

  return (
    <div>
        {
            <CardList results={data.results} />
        }
    </div>
  )
}

export default Pokemon