import { NavLink } from "react-router-dom";
import { mainNavigation } from "@/data/navigation";
import styles from "./MainNav.module.css";

export default function MainNav() {
  return (
    <nav className={styles.nav} aria-label="Navegación principal">
      {mainNavigation.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
