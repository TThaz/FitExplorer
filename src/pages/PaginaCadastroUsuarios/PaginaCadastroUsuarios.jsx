import styles from "./styles.module.css"
import { useContext, useState, useEffect } from "react";
import { UsersContext } from "../../contexts/UsersContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";

function PaginaCadastroUsuarios() {

    const {cadastrarUsuarios} = useContext(UsersContext);
    const {register, handleSubmit, formState: {errors}, getValues, setValue} = useForm({});

    const buscarCEP = async () => {
        let cep = getValues('cep')

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
    }

    return (
        <>
        <Header/>
        <div className="container">
            <h1>Cadastro de novo usuario</h1>
            <form className={styles.form} onSubmit={handleSubmit(cadastrarUsuarios)}>
                
            <div className={styles.formOptions}>
                    <label htmlFor="nome">Insira seu nome: </label>
                    <input required
                        type="text"
                        placeholder="Insira seu nome"
                        name="nome"
                        id="nome"
                        {...register("nome",
                        {required: true})}
                    />
                </div>
                <div className={styles.formOptions}>
                    <select required 
                    name="sexo"
                    id="sexo"
                    {...register("sexo",
                    {required: true})
                    }>
                        <option value="">Selecione seu sexo: </option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
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
                    <label htmlFor="dataNasc">Data de Nascimento:</label>
                    <input required
                    type="date"
                    name="dataNasc"
                    id="dataNasc"
                    {...register("dataNasc",
                    {required: true})}
                     />
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="email">E-mail:</label>
                    <input required
                    type="email"
                    placeholder="Insira seu e-mail"
                    name="email"
                    id="email"
                    {...register("email",
                    {required: true})}
                     />
                </div>

                <div className={styles.formOptions}>
                <label htmlFor="senha">Senha:</label>
                <input required
                    type="password"
                    placeholder="Insira uma senha"
                    name="senha"
                    id="senha"
                    {...register("senha",
                    {required: true})}
                     />
                </div>  
                <div>
                    <button type="submit">Cadastrar</button>
                    <button type="submit"><Link to="/user-login" style={{textDecoration: 'none', color: 'black'}}>Voltar para Login</Link></button>
                </div>
            </form>
        </div>
        </>
    )
}

export default PaginaCadastroUsuarios;