import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LanguageIcon from "@mui/icons-material/Language";
import type { SvgIconComponent } from "@mui/icons-material";
import styles from "./SocialSection.module.css";

export type SocialPlatform =
  | "instagram"
  | "facebook"
  | "youtube"
  | "tiktok"
  | "website";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label?: string;
}

interface SocialSectionProps {
  title?: string;
  description?: string;
  links: SocialLink[];
  variant?: "default" | "compact";
}

const iconMap: Record<SocialPlatform, SvgIconComponent> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YouTubeIcon,
  tiktok: MusicNoteIcon,
  website: LanguageIcon,
};

const platformNames: Record<SocialPlatform, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  youtube: "YouTube",
  tiktok: "TikTok",
  website: "Sitio web",
};

export default function SocialSection({
  title = "Síguenos",
  description = "Descubre recomendaciones, cultura y experiencias auténticas de Japón.",
  links,
  variant = "default",
}: SocialSectionProps) {
  return (
    <section
      className={`${styles.wrapper} ${
        variant === "compact" ? styles.compact : ""
      }`}
    >
      <div className={styles.content}>
        <div className={styles.text}>
          <span className={styles.eyebrow}>URA ITINERARIOS</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <nav className={styles.socials} aria-label="Redes sociales">
          {links.map(({ platform, url, label }) => {
            const Icon = iconMap[platform];
            const accessibleLabel = label ?? platformNames[platform];

            return (
              <a
                key={`${platform}-${url}`}
                className={styles.socialLink}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={accessibleLabel}
                title={accessibleLabel}
              >
                <Icon className={styles.icon} />
                <span>{accessibleLabel}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </section>
  );
}