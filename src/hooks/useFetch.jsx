import { useState, useEffect } from "react";


function useFetch(url) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        
        fetch(url)
            .then((response) => response.json())
            .then((data) => setUsers(data)) 
            .catch((error) => console.log(error))
    }, [url]) 

    return users;
}

export default useFetch;