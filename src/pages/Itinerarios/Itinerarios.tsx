import PageContainer from "@/components/layout/PageContainer/PageContainer";
import TitleSection from "@/components/ui/TitleSection/TitleSection";
import Button from "@/components/ui/Button/Button";
import styles from "./Itinerarios.module.css";
import FloatingWhatsApp from "@/components/whatsapp/FloatingWhatsApp";
import { data } from "@/utils/dataWhatsApp";

// Imágenes principales
import logo from "@/assets/images/ura-logo-2.svg";
import heroImage from "@/assets/images/ura-fondo.jpg";
import miHistoriaImage from "@/assets/images/mihistoria.jpeg";
// TODO: agregar el mockup del libro a assets/images (ej. libro-japones-supervivencia.png)
import libroImage from "@/assets/images/libro.png";

// Iconos — pasos "¿Cómo funciona?"
import iconoPaso1 from "@/assets/images/icono_paso_1_ura_delgado.svg";
import iconoPaso2 from "@/assets/images/icono_paso_2_ura.svg";
import iconoPaso3 from "@/assets/images/icono_paso_3_ura_mejorado.svg";
import iconoPaso4 from "@/assets/images/ICONO 4.svg";

// Iconos — paquetes
import sakuraIcon from "@/assets/images/sakura.svg";
import toriiIcon from "@/assets/images/puerta-torii.svg";
import coronaIcon from "@/assets/images/corona.svg";
// TODO: falta el icono de "Ura Profundo" (pagoda) — no vino en los assets subidos.
// Se usa torii como placeholder temporal hasta tener el ícono definitivo.
import profundoIconPlaceholder from "@/assets/images/puerta-torii.svg";

// Iconos — libro incluido
import ramenIcon from "@/assets/images/ramen.svg";
import trenIcon from "@/assets/images/tren-electrico.svg";
import bolsasIcon from "@/assets/images/bolsas-de-compra.svg";
import kitIcon from "@/assets/images/kit-de-primeros-auxilios.svg";
import conversandoIcon from "@/assets/images/conversando.svg";
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';


const pasos = [
  { numero: 1, icon: iconoPaso1, title: "Cuéntanos de tu viaje" },
  { numero: 2, icon: iconoPaso2, title: "Creamos tu itinerario" },
  { numero: 3, icon: iconoPaso3, title: "Lo recibes digitalmente" },
  { numero: 4, icon: iconoPaso4, title: "Disfruta Japón" },
];

const paquetes = [
  {
    icon: sakuraIcon,
    nombre: "Descubre",
    precio: "GRATIS",
    descripcion: "Tu primera mirada a Japón.",
    boton: "Comenzar",
    variant: "outline",
    to: "/contacto",
  },
  {
    icon: toriiIcon,
    nombre: "Ura Esencia",
    precio: "$69 USD",
    descripcion: "Ideal para primer viaje.",
    boton: "Ver más",
    variant: "solid",
    to: "/contacto",
  },
  {
    icon: profundoIconPlaceholder,
    nombre: "Ura Profundo",
    precio: "$139 USD",
    descripcion: "Para descubrir un Japón más auténtico.",
    boton: "Ver más",
    variant: "solid",
    to: "/contacto",
  },
  {
    icon: coronaIcon,
    nombre: "Ura Total",
    precio: "$249 USD",
    descripcion: "La experiencia definitiva.",
    boton: "Ver más",
    variant: "solid",
    popular: true,
    to: "/contacto",
  },
];

const resenas = [
  {
    texto: "Nos ahorró muchísimas horas de investigación. Todo estaba perfectamente organizado.",
    nombre: "Mariana G.",
    lugar: "México",
  },
  {
    texto: "Descubrimos lugares que jamás hubiéramos encontrado por nuestra cuenta.",
    nombre: "Carlos y Ana",
    lugar: "España",
  },
  {
    texto: "El presupuesto fue muy preciso y el viaje salió mucho mejor de lo esperado.",
    nombre: "Luis F.",
    lugar: "Colombia",
  },
];

const librosItems = [
  { icon: ramenIcon, label: "Restaurantes" },
  { icon: trenIcon, label: "Transporte" },
  { icon: bolsasIcon, label: "Compras" },
  { icon: kitIcon, label: "Emergencias" },
  { icon: conversandoIcon, label: "Frases básicas" },
];

export default function Itinerarios() {
  return (
    <>
      <section
        className={styles.hero}
        style={{ "--hero-image": `url(${heroImage})` } as React.CSSProperties}
      >
        <PageContainer>
          <FloatingWhatsApp phone={data.phone} message={data.message} />
          <div className={styles.heroContent}>
            <img className={styles.logo} src={logo} alt="ura itinerarios" />
            <h1>
              Descubre un <em>Japón</em> más <strong>profundo</strong> como lo
              viven los <strong>locales</strong>
            </h1>
          </div>
        </PageContainer>
      </section>

      {/* Mi historia */}
      <section className="page-section" id="mi-historia">
        <PageContainer>
          <div className={styles.historia}>
            <img
              className={styles.historiaImg}
              src={miHistoriaImage}
              alt="Zuleiza en Japón"
            />
            <div className={styles.historiaContent}>
              <span className={styles.label}>Mi historia</span>
              <p>
                Un sueño que parecía imposible me llevó a Japón. Después de
                años de esfuerzo, trabajo y aprendizaje, hoy comparto todo lo
                que he vivido para que tú descubras un Japón auténtico desde
                el primer día, ahorrando tiempo y evitando errores.
              </p>
              <blockquote className={styles.quoteBox}>
                <FormatQuoteRoundedIcon sx={{ color: 
                 "var(--color-red)", scale:3, transform: 'rotate(180deg)', margin:"1em"}}/>
                Viajar debería ser disfrutar la experiencia, no pasar semanas
                investigando.
              </blockquote>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Cómo funciona */}
      <section className={`page-section ${styles.funcionaSection}`} id="como-funciona">
        <PageContainer>
          <span className={styles.labelCenter}>¿Cómo funciona?</span>
          <div className={styles.steps}>
            {pasos.map((paso, i) => (
              <div className={styles.step} key={paso.numero}>
                <div className={styles.stepCircleWrap}>
                  <div className={styles.stepIcon}>
                    <img src={paso.icon} alt="" />
                  </div>
                  {i < pasos.length - 1 && <span className={styles.stepLine} />}
                </div>
                <p>{paso.title}</p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Paquetes */}
      <section className="page-section" id="paquetes">
        <PageContainer>
          <TitleSection
            highlight="Paquetes"
            title="Elige tu experiencia"
            highlightClassName={styles.subTitles}
          />
          <div className={styles.cardsGrid}>
            {paquetes.map((p) => (
              <article
                key={p.nombre}
                className={`${styles.card} ${p.popular ? styles.cardPopular : ""}`}
              >
                {p.popular && (
                  <span className={styles.cardBadge}>Más popular</span>
                )}
                <img className={styles.cardIcon} src={p.icon} alt="" />
                <h3>{p.nombre}</h3>
                <span className={styles.cardPrice}>{p.precio}</span>
                <p className={styles.cardDesc}>{p.descripcion}</p>
                <Button
                  className={styles.button}
                  to={p.to}
                >
                  {p.boton}
                </Button>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Reseñas */}
      <section className={`page-section ${styles.resenasSection}`} id="resenas">
        <PageContainer>
          <TitleSection
            highlight="Reseñas"
            title="Lo que dicen nuestros viajeros"
            highlightClassName={styles.subTitles}
          />
          <div className={styles.reviewsGrid}>
            {resenas.map((r) => (
              <article className={styles.reviewCard} key={r.nombre}>
                <div className={styles.stars} aria-label="5 estrellas">
                  ★★★★★
                </div>
                <p>&ldquo;{r.texto}&rdquo;</p>
                <div className={styles.reviewAuthor}>
                  <span className={styles.avatar} aria-hidden="true" />
                  <div>
                    <strong>{r.nombre}</strong>
                    <span>{r.lugar}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Libro incluido */}
      <section className="page-section" id="libro">
        <PageContainer>
          <div className={styles.libro}>
            <img
              className={styles.libroImage}
              src={libroImage}
              alt="Libro Japonés de Supervivencia"
            />
            <div className={styles.libroContent}>
              <span className={styles.label}>Libro incluido</span>
              <h2>Japonés de Supervivencia</h2>
              <p>Frases al grano para usar durante tu viaje.</p>
              <div className={styles.iconRow}>
                {librosItems.map((item) => (
                  <div className={styles.iconItem} key={item.label}>
                    <img src={item.icon} alt="" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <p className={styles.banner}>
                🎁 Incluido sin costo en todos los paquetes Ura.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
