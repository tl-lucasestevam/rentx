import { Inter, Archivo } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });

export const theme = {
  colors: {
    red: {
      "500": "#DC1637",
      "200": "#FF99AA",
      "50": "#FDEDEF",
    },
    green: {
      "500": "#03B252",
      "50": "#DAF3E5",
    },
    black: {
      "500": "#1B1B1F",
    },
    white: {
      "500": "#FFFFFF",
    },
    gray: {
      "950": "#29292E",
      "800": "#47474D",
      "600": "#7A7A80",
      "500": "#AEAEB3",
      "300": "#DEDEE3",
      "200": "#EBEBF0",
      "100": "#F4F5F6",
    },
  },
  fonts: {
    inter: inter.style.fontFamily,
    archivo: archivo.style.fontFamily,
  },
};
