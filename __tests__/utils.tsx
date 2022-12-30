import { render, RenderOptions } from "@testing-library/react";
import { theme } from "~/styles/theme";
import React, { PropsWithChildren, ReactElement } from "react";
import { ThemeProvider } from "styled-components";

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
