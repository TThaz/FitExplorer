import { createContext, useEffect, useState } from "react"

export const ExercisesContext = createContext();

export const ExercisesContextProvider = ({children}) => {
    
    const [locais, setLocais] = useState([]);

    useEffect(() => { 
      lerLocais()
    }, [])

    function lerLocais() {
      fetch("http://localhost:3000/listaLocais")
      .then(response => response.json())
      .then(dados => setLocais(dados))
      .catch(erro => console.log(erro))
    }

    function cadastrarLocais(formValue) {
      fetch("http://localhost:3000/listaLocais", {
          method: "POST",
          body: JSON.stringify(formValue),
          headers: {
              'Content-Type': 'application/json',
          },
      })
      .then(() => {
        alert("Deu certo")
        lerLocais()
        window.location.href = "/dashboard"
        })
      .catch(() => alert("Deu errado"))
  }

  function deletarLocais(id) {
    fetch("http://localhost:3000/listaLocais/" + id, {
        method: "DELETE"
    })
    .then(() => {alert("Deletou certo")
                          lerLocais()})
    .catch((error) => console.log(error))
  }

    return (
        <ExercisesContext.Provider value={{locais, cadastrarLocais, deletarLocais}}>
            {children}
        </ExercisesContext.Provider>
    )
}