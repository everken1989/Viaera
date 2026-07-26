import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import { mainNavigation } from "@/data/navigation";
import styles from "./MobileMenu.module.css";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <div
      className={`${styles.overlay} ${open ? styles.open : ""}`}
      onClick={onClose}
      aria-hidden={!open}
    >
      <aside className={styles.panel} onClick={(event) => event.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Cerrar menú">
          <CloseIcon />
        </button>

        <nav className={styles.nav}>
          {mainNavigation.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={onClose}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </div>
  );
}
