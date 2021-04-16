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
import withAuth from "../../hoc/withAuth";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      cursor: "pointer",
      marginTop: theme.spacing(2),
      borderRadius: "50px",
    },
  })
);

function PatientMain() {
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
          <Grid container direction="column">
            <Grid item>
              <SectionHeader
                title={"Select Option"}
                titleVariant={"h4"}
              ></SectionHeader>
            </Grid>
            <Grid item>
              <CardBase
                withShadow
                liftUp
                className={classes.card}
                onClick={() => {
                  router.push("/patient/daily-tip");
                }}
              >
                <Typography variant="h5">View Daily Tips</Typography>
              </CardBase>
              <Grid item>
                <CardBase
                  withShadow
                  className={classes.card}
                  liftUp
                  onClick={() => {
                    router.push("/patient/view-all-vitals");
                  }}
                >
                  <Typography variant="h5">Add/View Vitals</Typography>
                </CardBase>
              </Grid>
              <Grid item>
                <CardBase
                  withShadow
                  className={classes.card}
                  liftUp
                  onClick={() => {
                    router.push("/post-alert");
                  }}
                >
                  <Typography variant="h5">Post Alerts</Typography>
                </CardBase>
              </Grid>
              <Grid item>
                <CardBase
                  withShadow
                  className={classes.card}
                  liftUp
                  onClick={() => {
                    router.push("/relax");
                  }}
                >
                  <Typography variant="h5">Relax Yourself</Typography>
                </CardBase>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item lg={6} xs={12}>
          <ViewAllAlerts />
        </Grid> */}
      </Grid>
    </div>
  );
}

export default withAuth(PatientMain);
