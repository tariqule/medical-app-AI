// eslint-disable-next-line
import { PaletteType } from "@material-ui/core";

const MAIN_YELLOW = "#F1C40F";
export const light = {
  alternate: {
    main: "rgb(247, 249, 250)",
    dark: "#e8eaf6",
  },
  cardShadow: "rgba(23, 70, 161, .11)",
  type: "light" as PaletteType,
  primary: {
    main: "#2c3e50",
    light: "#2980b9",
    dark: "#192a56",
    contrastText: "#fff",
  },
  secondary: {
    light: "#fbc531",
    main: "#e1b12c",
    dark: "#e84118",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  text: {
    primary: "#2d3748",
    secondary: "#718096",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: "#F4F6F8",
    default: "#F4F6F8",
    level2: "#f5f5f5",
    level1: "#fff",
    footer: "#1b1642",
    mainBg: "#1F2424",
  },
};
