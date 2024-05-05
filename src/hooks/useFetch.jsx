import { useState, useEffect } from "react";


function useFetch(url) {

    const [dados, setDados] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setDados(data)) 
            .catch((error) => console.log(error))
    }, [url]) 

    return dados;
}

export default useFetch;