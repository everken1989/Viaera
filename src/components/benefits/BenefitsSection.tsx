import styles from "./BenefitsSection.module.css";
import type { ReactNode } from "react";
export interface BenefitItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  items: BenefitItem[];
}

export default function BenefitsSection({
  items,
}: BenefitsSectionProps) {
  return (
    <section className={styles.wrapper}>
      {items.map((item) => (
        <article key={item.title} className={styles.card}>
          {typeof item.icon === "string"
          ? <img className={styles.iconsCards} src={item.icon} alt={item.title} />
          : <div className={styles.iconsCards}>
                {item.icon}
            </div>}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </section>
  );
}