import { createContext, useEffect, useState } from "react"

export const UsersContext = createContext();

export const UsersContextProvider = ({children}) => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => { 
      lerUsers()
    }, [])

    function lerUsers(){
      fetch("http://localhost:3000/usuarios")
      .then(response => response.json())
      .then(dados => setUsuarios(dados))
      .catch(erro => console.log(erro))
    }

    async function lerUsersByID(id){
        try {
          let resultado = await fetch("http://localhost:3000/usuarios/" + id )
          return resultado.json()
        } catch {

        }
    }

    function cadastrarUsuarios(novoUsuario) {
      fetch("http://localhost:3000/usuarios", {
          method: "POST",
          body: JSON.stringify(novoUsuario),
          headers: {
              'Content-Type': 'application/json',
          },
      })
      .then(() => alert("Deu certo"))
      .catch(() => alert("Deu errado"))
  }

    function editarUsuarios(dadosUsuario) {
      let idLogado = localStorage.getItem("ID")
      
      fetch("http://localhost:3000/usuarios/" + idLogado, {
          method: "PUT",
          body: JSON.stringify(dadosUsuario),
          headers: {
              'Content-Type': 'application/json',
          },
      })
      .then(() => {alert("Editou certo")
                      lerUsers()})
      .catch(() => alert("Editou errado"))
  }

    function deletarUsuarios(id) {
      fetch("http://localhost:3000/usuarios/" + id, {
          method: "DELETE"
      })
      .then(() => {alert("Deletou certo")
                      lerUsers()})
      .catch((error) => console.log(error))
  }


  async function login(email, senha){
    try {
      const response = await fetch("http://localhost:3000/usuarios")
      const dados = await response.json()

      let usuarioExiste = false;

      dados.map(usuario => {
        if(usuario.email == email) {
          usuarioExiste = true
          if(usuario.senha == senha) {
            localStorage.setItem("isAutenticado", true)
            localStorage.setItem("ID", usuario.id)
            window.location.href = "/dashboard"
            return
          }
         
          alert("Senha incorreta")
          return 
        }
      })

        if(!usuarioExiste) {
          alert("Usuario não cadastrado")
        }
    }

    catch {

    }
  }

  function logout() {
    localStorage.removeItem("isAutenticado")
    localStorage.removeItem("ID")
    window.location.href= "/user-login"
  }

    return (
        <UsersContext.Provider value={{usuarios, login, logout, cadastrarUsuarios, editarUsuarios, deletarUsuarios, lerUsersByID}}>
            {children}
        </UsersContext.Provider>
    )
}