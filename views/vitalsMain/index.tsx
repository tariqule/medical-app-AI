import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import CardBase from "../../components/CardBase";
import SectionHeader from "../../components/SectionHeader";
import AddVitals from "../addVitals";
import router from "next/router";
import ViewAllAlerts from "../viewAllAlerts";
import ViewAllVitals from "../viewAllVitals";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      cursor: "pointer",
      marginTop: theme.spacing(2),
      borderRadius: "50px",
    },
  })
);

function VitalsMain() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction="row"
        spacing={3}
        justify="center"
        alignItems="center"
      >
        <Grid item lg={3} xs={12}>
          <AddVitals />
        </Grid>
        <Grid item lg={6} xs={12}>
          <ViewAllVitals />
        </Grid>
      </Grid>
    </div>
  );
}

export default VitalsMain;
