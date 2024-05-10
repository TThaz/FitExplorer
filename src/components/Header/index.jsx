import styles from "./style.module.css"
import { Link } from "react-router-dom";

function Header() {
  return ( 
    <header className={styles.header}>
      <Link to="#" className={styles.link}><h4>FitExplorer</h4></Link>
      <nav className={styles.nav}>
        <Link to="/cadastro/usuarios" className={styles.link}>Cadastrar Usuários</Link>
        <Link to="/user-login" className={styles.link}>Página Login</Link>
      </nav>
    </header>
  );
}

export default Header;