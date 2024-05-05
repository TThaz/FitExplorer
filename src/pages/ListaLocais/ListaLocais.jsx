import CardLocal from "../../components/CardLocal";
import styles from "./styles.module.css";
import { ExercisesContext } from "../../contexts/ExercisesContext";
import { useContext } from "react";

function ListaLocais() {

    const { locals } = useContext(ExercisesContext)

    return (
        <div>
                <div className={styles.rectangle}><div className={styles.rectangleOverlay}></div></div>
                <p className={styles.mainTitle}>Explore trilhas incríveis</p>
                <div>
                    {Array.isArray(locals) &&
                      locals.map((local, index) => (
                        <CardLocal dadosLocal={local} key={index} />
                      ))
                    }
                </div>
        </div>
    )
}

export default ListaLocais;