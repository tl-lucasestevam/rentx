import { ColorTokens } from "~/components/@shared/types";
import { ReactNode } from "react";

export type HeadingVariants = "extraLarge" | "large" | "medium" | "small";

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps {
  variants?: HeadingVariants;
  children: ReactNode;
  color?: ColorTokens;
  as?: HeadingTag;
}

export type HeadingBaseProps = Omit<HeadingProps, "children">;
