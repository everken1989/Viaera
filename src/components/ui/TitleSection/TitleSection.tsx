import styles from "./TitleSection.module.css";

type Props = {
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
  highlightClassName?: string;
  align?: "left" | "center";
};

export default function TitleSection({
  title,
  highlight,
  highlightClassName,
  description,
  className,
  align = "center",
}: Props) {
  return (
    <header className={`${styles.wrapper} ${styles[align]} ${className ?? ""}`}>
      <h2>
        {title} {highlight && <span className={highlightClassName}>{highlight}</span>}
      </h2>
      {description && <p>{description}</p>}
    </header>
  );
}
