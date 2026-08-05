import { Link } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer/PageContainer";
import logo from "@/assets/images/viaera-logo.svg";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <PageContainer className={styles.inner}>
        <div>
          <img className={styles.logo} src={logo} alt="Viaera" />
          <p>Viaja, estudia y conecta con el mundo.</p>
        </div>

        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/itinerarios">Itinerarios</Link>
          <Link to="/cursos">Cursos</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </PageContainer>
    </footer>
  );
}
