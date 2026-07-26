import styles from "./ExperienceSection.module.css";
import quoteIcon from "@/assets/images/quote.svg"
import stamp from "@/assets/images/quote.svg";
import photo from "@/assets/images/zule.png";

interface ExperienceSectionProps {
  title?: string;
  quote?: string;
  description: string;
}

export default function ExperienceSection({
  title,
  quote,
  description,
}: ExperienceSectionProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.left}>
          { !Boolean(title) ?
          <div className={styles.quoteCircle}>
            <img src={quoteIcon} alt="Quote" />
          </div> 
          : <h2>{title}</h2> 
          }
          <p className={styles.quote}>{quote}</p>
          <div className={styles.line}></div>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.right}>
          { !Boolean(title) ? 
          <img src={stamp} alt="Experiencias reales" />
          : <img className={styles.photo} src={photo} alt="zuleiza" />
          }
        </div>
      </div>
    </section>
  );
}