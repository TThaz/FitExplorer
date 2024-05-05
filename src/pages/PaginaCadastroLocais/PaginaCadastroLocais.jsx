import styles from "./styles.module.css"
import { useForm } from "react-hook-form"
import { ExercisesContext } from "../../contexts/ExercisesContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

function PaginaCadastroLocais() {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const { addLocals, locals } = useContext(ExercisesContext)
    const navigate = useNavigate();


    function sendForm(formValue) {
        addLocals(formValue);
        navigate("/lista-locais");
    }

  return (
        <div className="container">

            <h1>Cadastro de novo local</h1>

            <form className={styles.form} onSubmit={handleSubmit(sendForm)}>

                <div className={styles.formOptions}>
                    <label htmlFor="nomeLocal">Nome do local: </label> 
                    <input type="text" 
                    {...register("nomeLocal")
                    }
                    />
                 </div>
                 {errors?.nomeLocal && <p>{errors.nomeLocal?.message}</p>}

                <div className={styles.formOptions}>
                    <label htmlFor="nomeUsuario">Nome de usuário: </label>
                    <input type="text" 
                    {...register("nomeUsuario")
                    } 
                    />
                </div>
                {errors?.nomeUsuario && <p>{errors.nomeUsuario?.message}</p>}

                <div className={styles.formOptions}>
                    <label htmlFor="descricao">Descrição do local: </label>
                    <input type="text" 
                    {...register("descricao")
                    } 
                    />
                </div>
                {errors?.descricao && <p>{errors.descricao?.message}</p>}

                <div className={styles.formOptions}>
                    <label htmlFor="localizacao">Localização (CEP): </label>
                    <input type="number" 
                    {...register("localizacao")
                    } />
                </div>
                {errors?.localizacao && <p>{errors.localizacao?.message}</p>}

                <div className={styles.formOptions}>
                    <label htmlFor="esportes">Esportes disponíveis: </label>
                    <select name="esportes" 
                    {...register("esportes")
                    }>
                        <option value="">Selecione uma opção</option>
                        <option value="futebol">Futebol</option>
                        <option value="volei">Vôlei</option>
                        <option value="corrida">Corrida</option>
                        <option value="aerobica">Aeróbica</option>
                        <option value="musculacao">Musculação</option>
                    </select>
                </div>
                {errors?.esportes && <p>{errors.esportes?.message}</p>}

                <div className={styles.formButtons}>
                    <button type="submit">Cadastrar</button>
                    <button type="submit">Voltar</button>
               </div>
            </form>
        </div>
          
    )
}

export default PaginaCadastroLocais;