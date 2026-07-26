import Button from "@/components/ui/Button/Button";
import styles from "./CTASection.module.css";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

interface CTASectionProps {
  icon: any;
  title: string;
  price: string;
  button: string;
  description: string;
}

export default function CTASection({
  icon,
  title,
  price,
  button,
  description,
}: CTASectionProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <PictureAsPdfIcon sx={{ fontSize:"100px", color:"var(--color-primary)"}}/>

        <div>
          <small>{title}</small>
          <h2>{price}</h2>
        </div>
      </div>

      <div className={styles.right}>
        <Button to="/pdf">
          {button}
        </Button>
        <p>{description}</p>
      </div>

    </section>
  );
}