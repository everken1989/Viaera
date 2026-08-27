import viajesImage from "@/assets/images/viajes.png";
import cursosImage from "@/assets/images/idiomas.png";
import programacionImage from "@/assets/images/programacion.png";
import type { FeatureItem } from "@/types/content";

export const homeFeatures: FeatureItem[] = [
  {
    title: "Explora",
    highlight: "Japón como un Local",
    description: "Itinerarios personalizados, diseñados por personas que han vivido en Japón, para que explores sus rincones, descubras su esencia y vivas el país más allá de lo turístico.",
    image: viajesImage,
    actionLabel: "Ver itinerarios",
    to: "/itinerarios",
  },
  {
    title: "Aprende",
    highlight: "idiomas",
    description: "Japonés, inglés y español con un enfoque práctico y centrado en comunicación real.",
    image: cursosImage,
    actionLabel: "Ver cursos",
    to: "/cursos",
  },
  {
    title: "Desarrolla",
    highlight: "habilidades digitales",
    description: "UI, programación, motion y 3D para crear proyectos y fortalecer tu perfil profesional.",
    image: programacionImage,
    actionLabel: "Explorar cursos",
    to: "/cursos",
  },
];
