import Button from "@/components/ui/Button/Button";
import type { FeatureItem } from "@/types/content";
import styles from "./FeatureCard.module.css";

export default function FeatureCard({
  title,
  highlight,
  description,
  image,
  actionLabel,
  to,
}: FeatureItem) {
  return (
    <article className={styles.card}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles.body}>
        <h3>{title} {highlight && <span>{highlight}</span>}</h3>
        <p>{description}</p>
        <Button to={to}>{actionLabel}</Button>
      </div>
    </article>
  );
}
