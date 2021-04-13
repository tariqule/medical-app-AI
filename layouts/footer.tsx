import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import * as React from "react";

export default function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2021
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
