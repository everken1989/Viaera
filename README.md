# Viaera Platform

Arquitectura profesional en React + TypeScript + Vite.

## Incluye

- React Router
- Alias `@/`
- CSS Modules
- Design tokens
- Layout principal
- Menú responsive
- Componentes reutilizables
- Formularios preparados para conectar con API
- Páginas:
  - Inicio
  - Itinerarios
  - Cursos
  - Contacto

## Instalar

```bash
npm install
npm run dev
```

## Import correcto de CSS Modules

```tsx
import styles from "./Home.module.css";
```

No uses:

```tsx
import { styles } from "./Home.module.css";
```

## Estructura

```text
src/
  assets/
  components/
    cards/
    forms/
    layout/
    navigation/
    ui/
  data/
  hooks/
  layouts/
  pages/
  router/
  services/
  styles/
  types/
  utils/
```
