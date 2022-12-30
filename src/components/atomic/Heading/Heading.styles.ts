import styled, { css } from "styled-components";

import { HeadingBaseProps } from "./Heading.types";

export const HeadingBase = styled.h2<HeadingBaseProps>`
  ${({ theme, color, variants }) => css`
    font-family: ${theme.fonts.archivo};
    font-weight: 600;
    color: ${theme.colors[color ?? "gray800"]};

    ${() => {
      switch (variants) {
        case "extraLarge":
          return css`
            font-size: 3.375rem;
          `;
        case "large":
          return css`
            font-size: 2.25rem;
          `;
        case "medium":
          return css`
            font-size: 1.5rem;
            line-height: 1.25;
          `;
        case "small":
          return css`
            font-size: 1.25rem;
            line-height: 1.25;
          `;
      }
    }}}
  `}
`;
