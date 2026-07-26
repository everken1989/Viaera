import styles from "./TitleSection.module.css";

type Props = {
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
};

export default function TitleSection({
  title,
  highlight,
  description,
  align = "center",
}: Props) {
  return (
    <header className={`${styles.wrapper} ${styles[align]}`}>
      <h2>
        {title} {highlight && <span>{highlight}</span>}
      </h2>
      {description && <p>{description}</p>}
    </header>
  );
}
