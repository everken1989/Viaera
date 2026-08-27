import Button from "@/components/ui/Button/Button";
import FeatureCard from "@/components/cards/FeatureCard/FeatureCard";
import PageContainer from "@/components/layout/PageContainer/PageContainer";
import SectionTitle from "@/components/ui/TitleSection/TitleSection";
import { homeFeatures } from "@/data/home";
import heroImage from "@/assets/images/personalizados.png";
import heroImageMobile from "@/assets/images/personalizados-mobile.png"
import styles from "./Home.module.css";
import ContactForm from "@/components/forms/ContactForm/ContactForm"
import FAQAccordion from "@/components/accordion/FAQAccordion";
import { faqItems } from "@/data/faqData";
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import AppDivider from "@/components/ui/Divider/AppDivider";
import FloatingWhatsApp from "@/components/whatsapp/FloatingWhatsApp";
import { data } from "@/utils/dataWhatsApp";
import { useMediaQuery } from "@mui/material";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const testimonials = [
  {
    name: "Ulises ",
    language: "Japonés",
    quote: "Me gusta mucho la dinámica de Zule para enseñar. Siempre utiliza ejemplos útiles y explica cada tema con mucha paciencia. Lo que más disfruto es cómo integra el contexto histórico y cultural, haciendo que aprender japonés sea mucho más interesante y enriquecedor.",
  },
  {
    name: "Jing ",
    language: "Español",
    quote: "Learning Spanish with Zuleiza has been one of the best decisions I’ve made. She makes every lesson engaging and always makes me feel comfortable, even when I make mistakes. Instead of making me feel discouraged, she turns every mistake into an opportunity to learn. I’ve gained so much confidence speaking Spanish, and I genuinely look forward to every class. Thank you for making language learning such a positive and enjoyable experience!",
  },
  {
    name: "José ",
    language: "Inglés",
    quote: "Tomar clases con Zule ha sido una de las mejores decisiones que he tomado para aprender inglés. Adapta cada clase a tu nivel, necesidades y ritmo, haciendo que aprender sea mucho más efectivo y motivador. Su paciencia, energía y forma de explicar crean un ambiente donde puedes preguntar y equivocarte sin miedo. *¡Gracias, Zule, por hacer del inglés una experiencia tan positiva!",
  },
]
  return (
    <>
      <section
        className={styles.hero}
        style={{
          backgroundImage: isMobile ? `linear-gradient(90deg, rgba(12,14,24,.88), rgba(12,14,24,.22)), url("${heroImageMobile}")` 
                                    : `linear-gradient(90deg, rgba(12,14,24,.88), rgba(12,14,24,.22)), url("${heroImage}")`  ,
        }}
      >
        <PageContainer>
          <FloatingWhatsApp
              phone={data.phone}
              message={data.message}
          />
          <div className={styles.heroContent}>
            <h1>Viaja, estudia <br/>y conecta <span>con <br/>el mundo</span></h1>
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
            highlight="Ganarte la vida"
            description="Aprende idiomas y desarrolla las habilidades digitales que necesitas para trabajar, viajar y construir tu vida como nómada digital."
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
      {testimonials.map((testimonial) => (
        <blockquote key={testimonial.name}>
          <FormatQuoteRoundedIcon
            sx={{
              color: "var(--color-primary)",
              scale: 3,
              transform: "rotate(180deg)",
              margin: "0.5em",
            }}
          />
          <p>{testimonial.quote}</p>
          <AppDivider />
          <footer>
            <strong>{testimonial.name}</strong>
            <span><b>{testimonial.language}</b></span>
          </footer>
        </blockquote>
      ))}
    </div>
  </PageContainer>
</section>
      <ContactForm />
      <FAQAccordion items={faqItems} />
    </>
  );
}