import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "./FAQAccordion.module.css";
import { FAQItem } from "@/data/faqData";

interface Props {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  function toggle(index: number) {
    setSelected(prev => (prev === index ? null : index));
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Preguntas frecuentes</h2>

      {items.map((item, index) => (
        <article key={index} className={styles.card}>
          <button className={styles.question} onClick={() => toggle(index)}>
            <span>{item.question}</span>
            {selected === index ? <RemoveIcon /> : <AddIcon />}
          </button>

          <div className={`${styles.answer} ${selected === index ? styles.open : ""}`}>
            <p>{item.answer}</p>
          </div>
        </article>
      ))}
    </section>
  );
}