import { createContext, useEffect, useState } from "react"
import useFetch from "../hooks/useFetch.jsx"

export const ExercisesContext = createContext();

export const ExercisesContextProvider = ({children}) => {
    
    const dados = useFetch("/exercicios.json");
    const [locals, setLocals] = useState([]);

    useEffect(() => { 
      if(!!dados) {
        setLocals(dados.locals);
      }
    }, [dados])

    function addLocals(localData) {
      setLocals(l => [...l, localData])
    }

    return (
        <ExercisesContext.Provider value={{locals, setLocals, addLocals}}>
            {children}
        </ExercisesContext.Provider>
    )
}