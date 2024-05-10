import styles from "./style.module.css"
import { Link } from "react-router-dom";

function HeaderLogged() {
  return ( 
    <header className={styles.header}>
      <Link to="/home" className={styles.link}><h4>FitExplorer</h4></Link>
      <nav className={styles.nav}>
        <Link to="/dashboard" className={styles.link}>Dashboard</Link>
        <Link to="/cadastro/locais" className={styles.link}>Cadastrar Locais</Link>
      </nav>
    </header>
  );
}

export default HeaderLogged;