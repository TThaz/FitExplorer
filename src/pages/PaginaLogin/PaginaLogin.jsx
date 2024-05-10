import styles from "./styles.module.css"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { UsersContext } from "../../contexts/UsersContext"
import Header from "../../components/Header"

function PaginaLogin() {

    const { login } = useContext(UsersContext)

    const [usuario, setUsuario] = useState({
        email: "",
        password: ""
    })

    async function realizarLogin() {
        await login(usuario.email, usuario.senha)
    }
    return (
        <>
        <Header />
        <div className="container"> 
            <h1 className={styles.header}>Login</h1>

            <div className={styles.formOptions}>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email"
                    placeholder="Insira seu e-mail"
                    value={usuario.email}
                    onChange={(evento) =>  setUsuario({...usuario, email: evento.target.value})}
                     />
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password"
                    placeholder="Insira sua senha"
                    value={usuario.senha}
                    onChange={(evento) =>  setUsuario({...usuario, senha: evento.target.value})} />
                </div>
                <div>
                    <button type="submit" onClick={() => realizarLogin()}>Login</button>
                    <Link to="/cadastro/usuarios"><button type="submit">Cadastro</button></Link>
                </div>
        </div>
        </>
    )
}

export default PaginaLogin;