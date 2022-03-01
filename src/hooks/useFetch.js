import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [resultado, setResultado] = useState({
        cargando: true, 
        data: null
    })

    useEffect(() => {
        getData(url);
    }, [url])

    const getData = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        setResultado({
            cargando: false,
            data
        });
    }
  return resultado;
}
