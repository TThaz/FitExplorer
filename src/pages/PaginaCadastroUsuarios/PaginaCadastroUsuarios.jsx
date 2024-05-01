// O sistema quando iniciado irá carregar do localStorage ou json-server uma lista de usuários já cadastrados que usam a plataforma (criar uma lista com no mínimo 5 usuários, use o 4Devs - Ferramentas Online Grátis para gerar os usuários).
// Na tela de login terá o botão de login e o de cadastrar, que quando clicado permite se cadastrar como novo usuário. 
// Os usuários precisam fornecer: 
// Nome
// Sexo
// CPF
// Data de Nascimento
// E-mail
// Senha
// Endereço (usar ViaCEP)


import styles from "./styles.module.css"

function PaginaCadastroUsuarios() {
    return (
        <div>
            <form>
                
                <div>
                    <label htmlFor="name">Nome completo:</label> 
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="gender">Sexo:</label>
                    <select name="gender">
                        <option value="">Selecione um sexo</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="CPF">CPF:</label>
                    <input type="number" name="CPF" />
                </div>
                <div>
                    <label htmlFor="data-nascimento">Data de Nascimento:</label>
                    <input type="date" name="data-nascimento" />
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <label htmlFor="address">Endereço (CEP):</label>
                    <input type="number" name="address" />
                </div>

            </form>
        </div>
    )
}

export default PaginaCadastroUsuarios;