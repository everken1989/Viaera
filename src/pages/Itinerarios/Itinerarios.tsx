import PageContainer from "@/components/layout/PageContainer/PageContainer";
import SectionTitle from "@/components/ui/TitleSection/TitleSection";
import Button from "@/components/ui/Button/Button";
import image from "@/assets/images/hero-ura.png";
import tradiciones from "@/assets/images/tradiciones.png";
import normas from "@/assets/images/normas.png";
import cultura from "@/assets/images/cultura.png";
import arco from "@/assets/images/arco.svg";
import flor from "@/assets/images/flor.svg";
import styles from "./Itinerarios.module.css";
import ExperienceSection from "@/components/experience/ExperienceSection";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import sakura from "@/assets/images/flora.svg";
import heart from "@/assets/images/heart.svg";
import pin from "@/assets/images/pin.svg";
import star from "@/assets/images/star.svg";
import BenefitsSection from "@/components/benefits/BenefitsSection";
import CTASection from "@/components/cta/CTASection";
import SocialSection from "@/components/social/SocialSection";
import TitleSection from "@/components/ui/TitleSection/TitleSection";
import { socialLinks } from "@/utils/socialLinks";
import FloatingWhatsApp from "@/components/whatsapp/FloatingWhatsApp";
import { data } from "@/utils/dataWhatsApp";

const values = [
  ["Cultura", "Conoce costumbres, contexto y formas de pensar de Japón.", normas,flor],
  ["Normas", "Comprende reglas sociales, etiqueta y recomendaciones prácticas.", cultura,arco],
  ["Tradiciones", "Descubre experiencias auténticas más allá del turismo tradicional.",tradiciones,arco],
];
const benefits = [
  {
  icon:sakura,
  title:"Rutas auténticas",
  description:"Cada itinerario nace de la experiencia de haber vivido en Japón.",
  },

  {
  icon:heart,
  title:"Viaja con confianza",
  description:"Aprende qué hacer antes incluso de bajar del avión.",
  },

  {
  icon:pin,
  title:"Ahorra tiempo",
  description:"Evita semanas de investigación y disfruta más tu viaje.",
  },

  {
  icon:star,
  title:"Experiencias reales",
  description:"Descubre un Japón que pocas personas llegan a conocer.",
  }
];


export default function Itinerarios() {
  return (
    <>
      <section
        className={styles.hero}
        style={{
        "--hero-image": `url(${image})`,
       } as React.CSSProperties}
      >
        <PageContainer>
          <FloatingWhatsApp
                        phone={data.phone}
                        message={data.message}
          />
          <div className={styles.heroContent}>
            <span>Experiencias auténticas en Japón</span>
            <h1>Vive Japón <em><h1>como si</h1> <h1>fueras un local</h1></em></h1>
            <p>Itinerarios creados desde la experiencia real de vivir Japón por dentro.</p>
            <Button to="/contacto">Solicitar itinerario</Button>
          </div>
        </PageContainer>
      </section>

      <section className="page-section">
        <PageContainer>
          <TitleSection
            title="Hola, soy"
            highlight="Zuleiza"
            description="Viví, estudié y trabajé en Japón. Ahora transformo esa experiencia en rutas claras y personalizadas."
          />
          <div className={styles.values}>
            {values.map(([title, text,image,icon]) => (
              <article key={title}>
                <img className={styles.img} src={image} alt="img" />
                <div className={styles.cont}>
                <h3>{title}</h3>
                <img width={75} src={icon} alt="" />
                </div>
                <p>{text}</p>
              </article>
            ))}
          </div>
            <ExperienceSection
            quote="Durante ese tiempo aprendí cómo funciona realmente la vida en Japón: su cultura, sus normas sociales, sus costumbres y esos pequeños detalles que muchas veces pasan desapercibidos para quienes solo visitan el país unos días."
            description="URA Itinerarios nace de esa experiencia. Mi objetivo es ayudarte a vivir Japón de una forma más auténtica, organizada y consciente, para que puedas disfrutar el viaje sin perder tiempo y conectando realmente con la esencia del país."
          />
          <BenefitsSection items={benefits} />
          <CTASection
              icon={PictureAsPdfIcon}
              title="Experiencias desde"
              price="$2,950 MXN"
              button="Descargar PDF"
              description="Guía completa para descubrir Japón de una forma auténtica."
          />
          <SocialSection
          title="Conecta con Ura"
          description="Síguenos para continuar descubriendo Japón."
          links={socialLinks}
          variant="compact"
          />
        </PageContainer>
        
      </section>
    </>
  );
}
