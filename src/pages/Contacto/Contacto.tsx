import ContactForm from "@/components/forms/ContactForm/ContactForm";
import PageContainer from "@/components/layout/PageContainer/PageContainer";
import SectionTitle from "@/components/ui/TitleSection/TitleSection";
import styles from "./Contacto.module.css";
import FloatingWhatsApp from "@/components/whatsapp/FloatingWhatsApp";
import { data } from "@/utils/dataWhatsApp";
import SocialSection from "@/components/social/SocialSection";
import { socialLinks } from "@/utils/socialLinks";

export default function Contacto() {
  return (
    <section className={`page-section ${styles.page}`}>
      <PageContainer>
        <FloatingWhatsApp phone={data.phone} message={data.message} />
        <div className={styles.layout}>
          <div>
            <SectionTitle
              align="left"
              title="Hablemos sobre tu"
              highlight="próximo paso"
              description="Cuéntanos si te interesa un curso, un itinerario o una experiencia personalizada."
            />
            <div className={styles.details}>
              <p><strong>Correo</strong><br />uraitinerarios@outlook.com</p>
              <p><strong>Atención</strong><br />Lunes a Domingo 9:00AM a 20:00PM</p>
            </div>
          </div>
          <ContactForm />
        </div>
            <SocialSection 
              title="Contactanos en Redes Sociales"
              description="Síguenos para continuar descubriendo Japón."
              links={socialLinks}
              bussiness="VIAERA"
              variant="compact"/>
      </PageContainer>
    </section>
  );
}
