import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import MainNav from "@/components/navigation/MainNav/MainNav";
import MobileMenu from "@/components/navigation/MobileMenu/MobileMenu";
import PageContainer from "@/components/layout/PageContainer/PageContainer";
import { useToggle } from "@/hooks/useToggle";
import styles from "./Header.module.css";
import logo from "../../../assets/images/viaera-logo.svg";

export default function Header() {
  const menu = useToggle();

  return (
    <>
      <header className={styles.header}>
        <PageContainer className={styles.inner}>
          <Link to="/" className={styles.logo}><img src={logo} width={150} alt="viaera"/></Link>
          <MainNav />
          <button className={styles.menuButton} onClick={menu.toggle} aria-label="Abrir menú">
            <MenuIcon />
          </button>
        </PageContainer>
      </header>

      <MobileMenu open={menu.value} onClose={menu.close} />
    </>
  );
}
