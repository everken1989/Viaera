import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import whatsapp from "../../assets/images/whatsapp.png"
import styles from "./FloatingWhatsApp.module.css";

interface FloatingWhatsAppProps{
    phone?:string;
    message?:string;
}

export default function FloatingWhatsApp({
    phone="523315765624",
    message="Hola, me gustaría recibir información."
}:FloatingWhatsAppProps){

    const url=`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return(
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            aria-label="WhatsApp"
        >
            {/*<WhatsAppIcon className={styles.icon}/>*/}
            <img src={whatsapp} alt="whatsApp" className={styles.icon} />
        </a>
    )

}