import type { PropsWithChildren } from "react";
import styles from "./PageContainer.module.css";
import { cn } from "@/utils/cn";

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function PageContainer({ children, className }: Props) {
  return <div className={cn(styles.container, className)}>{children}</div>;
}
