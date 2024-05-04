import { createContext, useEffect, useState } from "react"
import useFetch from "../hooks/useFetch.jsx"

export const UsersContext = createContext();

export const UsersContextProvider = ({children}) => {
    
    const dados = useFetch("../data/config.json");
    const [users, setUsers] = useState([]);

    useEffect(() => { 
      if(!!dados) {
        setUsers(dados.users);
      }
    }, [dados])

    function registerUsers(userData) {
      setUsers(u => [...u, userData])
    }

    return (
        <UsersContext.Provider value={{users, setUsers, registerUsers}}>
            {children}
        </UsersContext.Provider>
    )
}