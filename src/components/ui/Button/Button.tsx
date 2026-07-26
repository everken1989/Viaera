import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import { cn } from "@/utils/cn";

type CommonProps = PropsWithChildren<{
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}>;

type LinkButtonProps = CommonProps & {
  to: string;
};

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never;
  };

export default function Button(props: LinkButtonProps | NativeButtonProps) {
  const variant = props.variant ?? "primary";
  const className = cn(styles.button, styles[variant], props.className);

  if ("to" in props && props.to) {
    return (
      <Link className={className} to={props.to}>
        {props.children}
      </Link>
    );
  }

  const { children, ...buttonProps } = props as NativeButtonProps;
  return (
    <button className={className} {...buttonProps}>
      {children}
    </button>
  );
}
