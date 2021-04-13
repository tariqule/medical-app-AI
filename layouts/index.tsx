import {
  CssBaseline,
  makeStyles,
  MuiThemeProvider,
  Paper,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import getTheme from "../theme";
import Footer from "./footer";
import TopBar from "./topbar";

interface Props {
  children: JSX.Element;
}

export default function MainLayout({ children }: Props) {
  return (
    <MuiThemeProvider theme={getTheme()}>
      <CssBaseline />
      <Paper elevation={0}>
        <TopBar />
        {children}
      </Paper>
    </MuiThemeProvider>
  );
}
