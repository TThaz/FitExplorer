import styles from "./styles.module.css"

function PaginaCadastroUsuarios() {
    return (
        <div className="container">
            <h1>Cadstro de novo usuario</h1>
            <form className={styles.form}>
                
                <div className={styles.formOptions}>
                    <label htmlFor="name">Nome completo:</label> 
                    <input type="text" name="name" />
                </div>
                <div className={styles.formOptions}>
                    <label htmlFor="gender">Sexo:</label>
                    <select name="gender">
                        <option value="">Selecione um sexo</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                </div>
                <div className={styles.formOptions}>
                    <label htmlFor="CPF">CPF:</label>
                    <input type="number" name="CPF" />
                </div>
                <div className={styles.formOptions}>
                    <label htmlFor="data-nascimento">Data de Nascimento:</label>
                    <input type="date" name="data-nascimento" />
                </div>
                <div className={styles.formOptions}>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" />
                </div>
                <div className={styles.formOptions}>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" />
                </div>
                <div className={styles.formOptions}>
                    <label htmlFor="address">Endereço (CEP):</label>
                    <input type="number" name="address" />
                </div>
                <div className={styles.formButtons}>
                    <button type="submit">Cadastrar</button>
                    <button type="submit">Voltar</button>
                </div>
            </form>
        </div>
    )
}

export default PaginaCadastroUsuarios;