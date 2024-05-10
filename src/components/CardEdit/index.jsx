import styles from "./styles.module.css"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function CardEdit({dadosLocal}) {

    const {register, handleSubmit} = useForm();
;

    function editar(formValue) {

        let teste = {...dadosLocal,
                nomeUsuario: formValue.nomeUsuario,
                descricao: formValue.descricao,
                bairro: formValue.bairro,
                logradouro: formValue.logradouro,
                cidade: formValue.cidade,
                estado: formValue.estado,
             }
        

         fetch("http://localhost:3000/listaLocais/" + dadosLocal.id,
        {
            method: "PUT",
            body: JSON.stringify(teste),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
        .catch((error) => console.log(error))
    }

    return (
        <>
                <div className={styles.lista_cards}>
                    <div className={styles.card_container}>
                        <div className={styles.card_display}>
                            <h1>{dadosLocal.nomeLocal}</h1>
                            <form onSubmit={handleSubmit(editar)}>
                                <div className={styles.card_dados}>
                                    <label htmlFor="nomeUsuario">
                                        Nome de Usuário:
                                        <input type="text"
                                         name="nomeUsuario"
                                        {...register("nomeUsuario")} defaultValue={dadosLocal.nomeUsuario}></input>
                                    </label>
                                    <label htmlFor="descricao">
                                        Descrição:
                                        <input type="text" name="descricao" {...register("descricao")} defaultValue={dadosLocal.descricao}></input>
                                    </label>
                                    <label htmlFor="bairro">Bairro:
                                    <input type="text" name="bairro" {...register("bairro")} defaultValue={dadosLocal.bairro}></input>
                                    </label>
                                    <label htmlFor="logradouro">
                                        Logradouro:
                                    <input type="text" name="logradouro" {...register("logradouro")} defaultValue={dadosLocal.logradouro}></input>
                                    </label>
                                    <label htmlFor="cidade">Cidade:
                                    <input type="text" name="cidade" {...register("cidade")} defaultValue={dadosLocal.cidade}></input>
                                    </label>
                                    <label htmlFor="estado">Estado: 
                                    <input type="text" name="estado" {...register("estado")} defaultValue={dadosLocal.estado}></input>
                                    </label>
                                    <button type="submit">Editar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </>

    )
}

export default CardEdit;