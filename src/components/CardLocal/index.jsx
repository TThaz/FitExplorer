import styles from "./styles.module.css"

function CardLocal({dadosLocal}) {
    return (
                <div className={styles.lista_cards}>
                    <div className={styles.card_container}>
                        <div className={styles.card_display}>
                            <h1>{dadosLocal.nomeLocal}</h1>
                            <div className={styles.card_dados}>
                                <span>Usuário: {dadosLocal.nomeUsuario}</span>
                                <span>Descrição do local: {dadosLocal.descricao}</span>
                                <span>Localização: {dadosLocal.bairro} - {dadosLocal.cidade}, {dadosLocal.estado}</span>
                                <span>Esporte disponível: {dadosLocal.esporte}</span>
                            </div>
                        </div>
                    </div>
                </div>

    )
}

export default CardLocal;