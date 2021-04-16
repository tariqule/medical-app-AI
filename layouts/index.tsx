import { CssBaseline, MuiThemeProvider, Paper } from "@material-ui/core";
import React from "react";
import getTheme from "../theme";
import TopBar from "./topbar";

interface Props {
  children: JSX.Element;
}

export default function MainLayout({ children }: Props) {
  return (
    <MuiThemeProvider theme={getTheme()}>
      <CssBaseline />
      <Paper elevation={0} style={{ overflow: "hidden" }}>
        <TopBar />
        {children}
      </Paper>
    </MuiThemeProvider>
  );
}
