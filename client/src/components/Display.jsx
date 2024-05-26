import {useEffect, useState} from 'react'
import axios from 'axios'
const Display = () => {

    const [responseData, setResponseData] = useState([])
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
        .then(response => (setResponseData(response.data.results)))
    }, []) 
    


    return (
        <>
            <ul>
                {
                responseData.map((poke, index) => (
                    <li key={index}>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</li>
                ))
                }
            </ul>
        </>
    )
}

export default Display