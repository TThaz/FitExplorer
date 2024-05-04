import styles from "./styles.module.css"

function PaginaCadastroLocais() {
  return (
        <div className="container">             
            <h1>Cadastro de novo local</h1>
            <form className={styles.form}>
                <div className={styles.formOptions}>
                    <label htmlFor="localName">Nome do local: </label> 
                    <input type="text" name="localName" />
                 </div>
                <div className={styles.formOptions}>
                    <label htmlFor="username">Nome de usuário: </label>
                    <input type="text" name="username" />
                </div>
                <div className={styles.formOptions}>
                    <label htmlFor="description">Descrição do local: </label>
                    <input type="text" name="description" />
                </div>
                <div className={styles.formOptions}>
                    <label htmlFor="localAddress">Localização (CEP): </label>
                    <input type="number" name="localAddress" />
                </div>
                <div className={styles.formOptions}>
                    <label htmlFor="availableSports">Esportes disponíveis: </label>
                    <select name="availableSports">
                        <option value="">Selecione uma opção</option>
                        <option value="futebol">Futebol</option>
                        <option value="volei">Vôlei</option>
                        <option value="corrida">Corrida</option>
                        <option value="aerobica">Aeróbica</option>
                        <option value="musculacao">Musculação</option>
                    </select>
                </div>
                <div className={styles.formButtons}>
                    <button type="submit">Cadastrar</button>
                    <button type="submit">Voltar</button>
               </div>
            </form>
        </div>
          
    )
}

export default PaginaCadastroLocais;