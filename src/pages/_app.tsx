import type { AppProps } from "next/app";
import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "~/styles/global";
import { theme } from "~/styles/theme";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
