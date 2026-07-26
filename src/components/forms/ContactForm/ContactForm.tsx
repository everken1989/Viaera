import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button/Button";
import { sendContactMessage } from "@/services/contact.service";
import styles from "./ContactForm.module.css";
import {openWhatsApp} from "@/utils/openWhatsApp";
import { data } from "@/utils/dataWhatsApp";
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    await sendContactMessage({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    });

    setStatus("success");
    event.currentTarget.reset();
  }
  function onOpenWhatsApp() {
    console.log('Open Whats');
    openWhatsApp(data.phone, data.message);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Nombre
        <input name="name" type="text" required placeholder="Tu nombre" />
      </label>
      <label>
        Correo electrónico
        <input name="email" type="email" required placeholder="tu@email.com" />
      </label>
      <label className={styles.full}>
        Mensaje
        <textarea name="message" rows={5} required placeholder="Escribe tu mensaje..." />
      </label>
      <Button type="submit" disabled={status === "loading"} onClick={onOpenWhatsApp}>
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </Button>
      {status === "success" && <p className={styles.success}>Mensaje enviado correctamente.</p>}
    </form>
  );
}
