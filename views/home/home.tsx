import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CardBase from "../../components/CardBase";
import SectionHeader from "../../components/SectionHeader";
import CovidAnimation from "./Animation/covid";
import router from "next/router";
const useStyles = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
    borderRadius: "100px",
  },
  covid: {
    marginTop: theme.spacing(5),
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <div>
      <>
        <SectionHeader
          title="Welcome To The Medical App"
          titleVariant={"h2"}
          subtitle="Utilize the power of AI to manage COVID Patients and more"
        />

        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item>
            <CardBase withShadow liftUp className={classes.card}>
              <>
                <img src="/svg/nurses.svg" width={"300px"}></img>
                <Typography>Nurses</Typography>
              </>
            </CardBase>
          </Grid>
          <Grid item>
            <CardBase withShadow liftUp className={classes.card}>
              <>
                <img src="/svg/patient.svg" width={"300px"}></img>
                <Typography>Patients</Typography>
              </>
            </CardBase>
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.covid}
        >
          <Grid item>
            <Button onClick={() => router.push("/predict-disease")}>
              <CovidAnimation />
              <Typography>Find COVID Report Using AI</Typography>
            </Button>
          </Grid>
        </Grid>
      </>
    </div>
  );
}

export default Home;
