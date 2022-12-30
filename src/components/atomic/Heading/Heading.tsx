import { FC } from "react";

import { HeadingBase } from "./Heading.styles";
import { HeadingProps } from "./Heading.types";

export const Heading: FC<HeadingProps> = ({
  children,
  variants = "medium",
  as,
  ...props
}) => {
  return (
    <HeadingBase as={as} variants={variants} {...props}>
      {children}
    </HeadingBase>
  );
};
