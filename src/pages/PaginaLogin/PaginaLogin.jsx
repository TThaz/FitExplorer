import styles from "./styles.module.css"
import { Link } from "react-router-dom"

function PaginaLogin() {
    return (
        <div className="container"> 
            <h1 className={styles.header}>Login</h1>

            <div>
                <label htmlFor="username"></label>
                <input type="text" name="username" placeholder="Nome de usuário" />
            </div>
            <div>
                <label htmlFor="password"></label>
                <input type="password" name="password" placeholder="Senha" />
            </div>
            <div>
                <button>Cadastrar</button>
                <Link to="/dashboard"><button>Voltar</button></Link>
            </div>
        </div>
    )
}

export default PaginaLogin;