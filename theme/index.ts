import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { light, dark } from "./palette";

const getTheme = () =>
  responsiveFontSizes(
    createMuiTheme({
      palette: light,

      layout: {
        contentWidth: 1236,
      },
      typography: {
        fontFamily: "Lato",
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100,
      },
    })
  );

export default getTheme;
