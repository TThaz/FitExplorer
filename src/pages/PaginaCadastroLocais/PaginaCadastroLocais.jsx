import styles from "./styles.module.css"
import { useForm } from "react-hook-form"
import { ExercisesContext } from "../../contexts/ExercisesContext"
import { useContext, useState } from "react"
import HeaderLogged from "../../components/HeaderLogged"

function PaginaCadastroLocais() {

    const { register, handleSubmit, formState: {errors}, getValues, setValue, setFocus } = useForm();
    const { cadastrarLocais} = useContext(ExercisesContext);

    const buscarCEP = async () => {
        let cep = getValues('cep')
        let creatorID = localStorage.getItem("ID")
        if(!!cep) {
            await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then(dados => {
                setValue('bairro', dados.bairro)
                setValue('logradouro', dados.logradouro)
                setValue('estado', dados.uf)
                setValue('cidade', dados.localidade)
                setFocus('numero')
            })
            .catch(error => console.log(error))
        }

        setValue('userID', creatorID)
    }

  return (
    <>
        <HeaderLogged />
        <div className="container">

            <h1>Cadastro de novo local</h1>

            <form className={styles.form} onSubmit={handleSubmit(cadastrarLocais)}>

                <div className={styles.formOptions}>
                    <label htmlFor="nomeLocal">Nome do Local: </label>
                    <input required
                        type="text"
                        placeholder="Insira o nome do local"
                        name="nomeLocal"
                        id="nomeLocal"
                        {...register("nomeLocal",
                        {required: true})}
                    />
                </div>
                <div className={styles.formOptions}>
                    <label htmlFor="nomeUsuario">Nome de Usuario: </label>
                    <input required
                        type="text"
                        placeholder="Insira seu nome de usuario"
                        name="nomeUsuario"
                        id="nomeUsuario"
                        {...register("nomeUsuario",
                        {required: true})}
                    />
                </div>
                <div className={styles.formOptions}>
                    <label htmlFor="descricao">Descrição: </label>
                    <input required
                        type="text"
                        placeholder="Insira uma breve descrição"
                        name="descricao"
                        id="descricao"
                        {...register("descricao",
                        {required: true})}
                    />
                </div>

                 <div className={styles.formOptions}>
                    <label htmlFor="cep">CEP: </label>
                    <input required
                    type="number"
                    placeholder="Insira seu CEP"
                    name="cep"
                    id="cep"
                    {...register("cep", 
                        {required: true,
                            maxLength: 8,
                            onBlur: () => buscarCEP()
                        })}
                        />

                    <label htmlFor="bairro">Bairro: </label>
                    <input required
                    type="text"
                    placeholder="Insira seu bairro"
                    name="bairro"
                    id="bairro"
                    {...register("bairro", 
                        {required: true})}
                    />

                    <label htmlFor="logradouro">Logradouro: </label>
                    <input required
                    type="text"
                    placeholder="Insira seu logradouro"
                    name="logradouro"
                    id="logradouro"
                    {...register("logradouro", 
                        {required: true})}
                    />

                    <label htmlFor="estado">Estado: </label>
                    <input required
                    type="text"
                    placeholder="Insira seu estado"
                    name="estado"
                    id="estado"
                    {...register("estado", 
                        {required: true,
                        maxLength: {value: 2, message: "Apenas 2 digitos"}})}
                    />

                    <label htmlFor="cidade">Cidade: </label>
                    <input required
                    type="text"
                    placeholder="Insira seu cidade"
                    name="cidade"
                    id="cidade"
                    {...register("cidade", 
                        {required: true})}
                    />
   
                    <label htmlFor="numero">Número: </label>
                    <input required
                    type="number"
                    placeholder="Insira o número da casa"
                    name="numero"
                    id="numero"
                    {...register("numero", 
                        {required: true})}
                    />
                    </div>
                
                 <div className={styles.formOptions}>
                    <label htmlFor="longitude">Insira a Longitude: </label>
                        <input required
                        type="number" 
                        placeholder="Insira a longitude"
                        name="longitude"
                        id="longitude"
                        {...register("longitude", 
                        {required: true})
                        }
                       />
                   
                    <label htmlFor="latitude">Insira a Latitude: </label>
                        <input required
                        type="number" 
                        placeholder="Insira a Latitude"
                        name="latitude"
                        id="latitude"
                        {...register("latitude", 
                        {required: true})
                        }
                       />
                    </div>

                <div className={styles.formOptions}>
                    <select required 
                    name="esporte"
                    id="esporte"
                    {...register("esporte",
                    {required: true})
                    }>
                        <option value="">Esporte Disponível</option>
                        <option value="Surf">Surf</option>
                        <option value="Vôlei">Vôlei</option>
                        <option value="Corrida">Corrida</option>
                        <option value="Aeróbica">Aeróbica</option>
                        <option value="Musculação">Musculação</option>
                    </select>
                </div>

                <div className={styles.formButtons}>
                    <button type="submit">Cadastrar</button>
               </div>
            </form>
        </div>
    </>
    )
}

export default PaginaCadastroLocais;