import { createContext, useEffect, useState } from "react"
import useFetch from "../hooks/useFetch.jsx"

export const ExercisesContext = createContext();

export const ExercisesContextProvider = ({children}) => {
    
    const dados = useFetch("../data/config.json");
    const [locals, setLocals] = useState([]);

    useEffect(() => { 
      if(!!dados) {
        setLocals(dados.locals);
      }
    }, [dados])

    function registerLocals(localData) {
      setLocals(l => [...l, localData])
    }

    return (
        <ExercisesContext.Provider value={{locals, setLocals, registerLocals}}>
            {children}
        </ExercisesContext.Provider>
    )
}