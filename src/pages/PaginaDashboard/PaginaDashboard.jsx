import styles from "./styles.module.css";
import CardLocal from "../../components/CardLocal";
import { useEffect, useState, useContext} from "react"
import { UsersContext } from "../../contexts/UsersContext";
import { ExercisesContext } from "../../contexts/ExercisesContext";
import HeaderLogged from "../../components/HeaderLogged";


function PaginaDashboard() {

    const {usuarios, lerUsersByID, editarUsuarios, deletarUsuarios} = useContext(UsersContext);
    const {locais, mostrarLocais} = useContext(ExercisesContext)
    const [usuarioEdit, setUsuarioEdit] = useState({
        nome: "",
        email: "",
        senha: ""
    });

    async function editar(id) {
        let dadosAtual = await lerUsersByID(id)
        setUsuarioEdit(dadosAtual)
    }

    return (
        <>
        <HeaderLogged />
                <div className="container">
    
                <div>
                <h2>Usuários cadastrados: {usuarios.length}</h2>
                    <hr />
                <h2>Locais cadastrados: {locais.length}</h2>
                </div>
                <p className={styles.mainTitle}></p>
                <div>
                    {Array.isArray(locais) &&
                      locais.map((local, index) => (
                        <CardLocal dadosLocal={local} key={index} />
                      ))
                    }
                </div>
        </div>
        </>
    )
}

export default PaginaDashboard;