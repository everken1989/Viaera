import Button from "@/components/ui/Button/Button";
import FeatureCard from "@/components/cards/FeatureCard/FeatureCard";
import PageContainer from "@/components/layout/PageContainer/PageContainer";
import SectionTitle from "@/components/ui/TitleSection/TitleSection";
import { homeFeatures } from "@/data/home";
import heroImage from "@/assets/images/personalizados.png";
import styles from "./Home.module.css";
import ContactForm from "@/components/forms/ContactForm/ContactForm"
import FAQAccordion from "@/components/accordion/FAQAccordion";
import { faqItems } from "@/data/faqData";
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import AppDivider from "@/components/ui/Divider/AppDivider";
import FloatingWhatsApp from "@/components/whatsapp/FloatingWhatsApp";
import { data } from "@/utils/dataWhatsApp";

export default function Home() {
  return (
    <>
      <section
        className={styles.hero}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(12,14,24,.88), rgba(12,14,24,.22)), url("${heroImage}")`,
        }}
      >
        <PageContainer>
          <FloatingWhatsApp
              phone={data.phone}
              message={data.message}
          />
          <div className={styles.heroContent}>
            <h1>Viaja, estudia y conecta <span>con el mundo</span></h1>
            <p>Aprende, crea y trabaja desde cualquier lugar con experiencias diseñadas para ti.</p>
            <div className={styles.actions}>
              <Button to="/cursos">Ver cursos</Button>
              <Button to="/itinerarios" variant="ghost">Ver itinerarios</Button>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="page-section">
        <PageContainer>
          <SectionTitle
            title="Descubre nuevas formas de"
            highlight="crecer"
            description="Viajes, idiomas y formación digital reunidos en una sola experiencia."
          />
          <div className={styles.grid}>
            {homeFeatures.map((feature) => (
              <FeatureCard key={feature.highlight} {...feature} />
            ))}
          </div>
        </PageContainer>
      </section>

      <section className={`page-section ${styles.testimonials}`}>
        <PageContainer>
          <SectionTitle title="Lo que dicen nuestros" highlight="alumnos" />
          <div className={styles.testimonialGrid}>
            {[
              "Aprendí japonés y viajé con mucha más seguridad.",
              "Los cursos son completos, claros y muy prácticos.",
              "Ahora puedo trabajar y estudiar desde cualquier lugar.",
            ].map((quote) => (
              <blockquote key={quote}><FormatQuoteRoundedIcon sx={{ color: 
                "var(--color-primary)", scale:3, transform: 'rotate(180deg)', margin:"0.5em"}}/>
              {quote}”<AppDivider /></blockquote>
            ))}
          </div>
        </PageContainer>
      </section>
      <FAQAccordion items={faqItems} />
      <ContactForm />
    </>
  );
}
