import styles from "./style.module.css"
import { Link } from "react-router-dom";

function Header() {
  return ( 
    <header className={styles.header}>
      <Link to="/" className={styles.link}><h4>FitExplorer</h4></Link>
      <nav className={styles.nav}>
        <Link to="/dashboard" className={styles.link}>Dashboard</Link>
        <Link to="/cadastro-locais" className={styles.link}>Cadastrar Locais</Link>
        <Link to="/user-login" className={styles.link}>Página Login</Link>
        <Link to="/user-register" className={styles.link}>Cadastrar Usuários</Link>
        <Link to="/lista-locais" className={styles.link}>Lista Locais</Link>
      </nav>
    </header>
  );
}

export default Header;