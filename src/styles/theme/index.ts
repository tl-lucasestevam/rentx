import { Inter, Archivo } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });

export const theme = {
  colors: {
    red500: "#DC1637",
    red200: "#FF99AA",
    red50: "#FDEDEF",
    green500: "#03B252",
    green50: "#DAF3E5",
    black500: "#1B1B1F",
    white500: "#FFFFFF",
    gray950: "#29292E",
    gray800: "#47474D",
    gray600: "#7A7A80",
    gray500: "#AEAEB3",
    gray300: "#DEDEE3",
    gray200: "#EBEBF0",
    gray100: "#F4F5F6",
  },
  fonts: {
    inter: inter.style.fontFamily,
    archivo: archivo.style.fontFamily,
  },
};
