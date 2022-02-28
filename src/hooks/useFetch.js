import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [resultado, setResultado] = useState({data: null})

    useEffect(() => {
        getData(url);
    }, [url])

    const getData = async (url) => {
        const resp = await fetch(url);
        const data = await resp.json();
        setResultado(data);
    }
  return resultado;
}
