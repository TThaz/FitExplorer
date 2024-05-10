import styles from "./styles.module.css"
import HeaderLogged from "../../components/HeaderLogged";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../contexts/UsersContext";
import { ExercisesContext } from "../../contexts/ExercisesContext";
import { useForm } from "react-hook-form";
import CardEdit from "../../components/CardEdit";


function PaginaHome() {

    const {register, handleSubmit, formState: {errors}, getValues, setValue, setFocus} = useForm({});
    const {usuarios, logout, editarUsuarios, lerUsersByID} = useContext(UsersContext)
    const {locais, deletarLocais} = useContext(ExercisesContext)
    
    let idLogado = localStorage.getItem("ID")
    
    let locaisCadastrados = locais.filter((local) => local.userID == idLogado)
    let usuarioLogado =  usuarios.find((user) => user.id == idLogado)

    
    function mandarEditar(formValue) {
        let padrao = {...usuarioLogado,
            nome: formValue.nome,
            senha: formValue.senha,
            email: formValue.email,
         }

         editarUsuarios(padrao)
    }


    return (
        <>
            <HeaderLogged/>
            
            <div className="container">
                <div className="editProfile">
                    <h1>Editar perfil </h1>
                     {usuarioLogado && (
                        <form onSubmit={handleSubmit(mandarEditar)}>
                                <div className={styles.card_dados}>
                                    <label htmlFor="nome">
                                        Nome de Usuário:
                                        <input type="text"
                                         name="nome"
                                        {...register("nome")} defaultValue={usuarioLogado.nome}></input>
                                    </label>
                                    <label htmlFor="email">
                                        E-mail:
                                        <input type="text" name="email" {...register("email")} defaultValue={usuarioLogado.email}></input>
                                    </label>
                                    <label htmlFor="senha">Senha:
                                    <input type="text" name="senha" {...register("senha")} defaultValue={usuarioLogado.senha}></input>
                                    </label>
                                    <button type="submit">Editar</button>
                                </div>
                            </form>
                            )} 
                </div>
            <h1>Usuário atual: {idLogado}</h1>
            {Array.isArray(locaisCadastrados) &&
                locaisCadastrados.map((local, index) => (
                    <div key={index}>
                        <CardEdit dadosLocal={local}  />
                        <button onClick={() => deletarLocais(local.id)}>Remover</button>
                    </div>
                ))
            }
            <button onClick={logout}>Logout</button>
            </div>
        </>
    )
}

export default PaginaHome;