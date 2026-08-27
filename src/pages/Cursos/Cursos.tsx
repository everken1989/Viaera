import PageContainer from "@/components/layout/PageContainer/PageContainer";
import TitleSection from "@/components/ui/TitleSection/TitleSection";
import Button from "@/components/ui/Button/Button";
import image from "@/assets/images/zuleizacursos.png";
import styles from "./Cursos.module.css";
import SchoolIcon from '@mui/icons-material/School';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BenefitsSection from "@/components/benefits/BenefitsSection";
import mexico from "@/assets/images/mexico.png";
import inglaterra from "@/assets/images/inglaterra.png";
import japon from "@/assets/images/japon.png";
import ExperienceSection from "@/components/experience/ExperienceSection";
import { socialLinks } from "@/utils/socialLinks";
import SocialSection from "@/components/social/SocialSection";
import FloatingWhatsApp from "@/components/whatsapp/FloatingWhatsApp";
import { data } from "@/utils/dataWhatsApp";

type Course = [
    string | null,
    string,
    string,
    string[]?
];
const courses: Course[] = [
  [
    mexico,
    "Español",
    "Practical communication skills to study, work, or travel with confidence.",
    [
      "Beginner to advanced levels",
      "Conversation and pronunciation",
      "Real-life expressions and daily Spanish",
      "Latin culture and communication",
    ],
  ],
  [
    inglaterra,
    "Inglés",
    "Comprensión, conversación y situaciones cotidianas.",
    [
      "Todos los niveles",
      "Conversación y comprensión",
      "Inglés para viajes y trabajo",
      "Clases dinámicas",
    ],
  ],
  [
    japon,
    "Japonés",
    "Japonés útil para la vida diaria, viajes y cultura.",
    [
      "Nivel N5 y N4",
      "Hiragana y Katakana",
      "Conversación cotidiana",
      "Cultura japonesa",
    ],
  ],
  [null, "UI Design", "Diseño web y mobile desde wireframes hasta prototipos."],
  [null, "Programación", "React, TypeScript, APIs y proyectos reales."],
  [null, "3D y Motion", "Modelado, render, animación y portafolio."],
];
const options = [
  {
  icon:<SchoolIcon sx={{ color:"var(--color-primary)", fontSize:"80px"}} />,
  title:"Aprende a tu ritmo",
  description:"Clases diseñadas para adaptarse a tus objetivos, nivel y disponibilidad."
  },
  {
  icon:<GpsFixedIcon sx={{ color:"var(--color-primary)", fontSize:"80px"}}/>,
  title:"Enfoque práctico",
  description:"Aprende con situaciones reales y ejemplos útiles para el día a día."
  },
  {
  icon:<CalendarMonthIcon sx={{ color:"var(--color-primary)" , fontSize:"80px"}}/>,
  title:"Horarios flexibles",
  description:"Encuentra horarios que se adapten a tu rutina y estilo de vida."
  },
  {
  icon:<MenuBookIcon sx={{ color:"var(--color-primary)", fontSize:"80px"}}/>,
  title:"Más que idiomas",
  description:"No solo aprenderás gramática. También aprenderás cultura, historia, contexto y la forma real en que las personas se comunican en cada idioma."
  }
]

export default function Cursos() {
  return (
    <>
      <section
        className={styles.hero}
        style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.95), rgba(255,255,255,.18)), url("${image}")` }}
      >
        <PageContainer>
          <FloatingWhatsApp
                        phone={data.phone}
                        message={data.message}
          />
          <div className={styles.heroContent}>
            <h1>Aprende idiomas<em> para conectar con <br/>el mundo</em></h1>
            <Button to="/contacto">Solicitar información</Button>
          </div>
        </PageContainer>
      </section>

      <section className="page-section">
        <PageContainer>
          <TitleSection
            title="Encuentra el curso"
            highlight="ideal para ti"
            description="Desarrolla tus habilidades lingüísticas, amplía tus oportunidades profesionales y prepárate para comunicarte con confianza en cualquier parte del mundo."
          />
          <div className={styles.grid}>
           {courses.map(([image, title, text, list]) => (
              <article key={title}>
                {image && (
                  <img
                    className={styles.countries}
                    src={image ? image : ''}
                    alt={title ? image : ''}
                  />
                )}
                <h3>{title}</h3>
                <p>{text}</p>
                {Array.isArray(list) && (
                  <ul className={styles.list}>
                    {list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
          <BenefitsSection items={options} />
          <ExperienceSection
                      title="Hola, soy Zuleiza."
                      description="Soy profesora de idiomas con 6 años de experiencia, trabajando en México y Japón con niños, adolescentes y adultos de diferentes nacionalidades, tanto extranjeros como latinoamericanos. He impartido español, inglés y japonés, adaptando cada clase al nivel, ritmo y necesidades de cada estudiante, y utilizando distintos idiomas de apoyo cuando es necesario.
Mi objetivo es que mis estudiantes no solo aprendan un idioma, sino que también ganen confianza, disfruten el proceso y conecten con nuevas culturas y oportunidades.
Creo que nunca dejamos de aprender. Por eso, continúo preparándome mediante cursos, clases y certificaciones para seguir creciendo como profesora y ofrecer una enseñanza cada vez mejor."
                    />
          <SocialSection
                    title="Conecta con Nuestros Cursos Idiomas"
                    description="Síguenos para continuar descubriendo Japón."
                    links={socialLinks}
                    bussiness="Cursos e Idiomas"
                    variant="compact"
                    />          
        </PageContainer>
      </section>
    </>
  );
}
