import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import CardBase from "../../components/CardBase";
import SectionHeader from "../../components/SectionHeader";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import router from "next/router";
import CovidAnimation from "./Animation/covid";
const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      cursor: "pointer",
      borderRadius: "100px",
    },
    covid: {
      marginTop: theme.spacing(5),
    },
  })
);
function AuthHome() {
  const classes = useStyles();
  const [userData, setUserData] = useLocalStorage("user-data", {});

  return (
    <div>
      <>
        <SectionHeader
          title={`Hello, ${userData?.firstName}!`}
          titleVariant={"h2"}
          subtitle="Choose the tool you need from below"
        />

        <Grid container justify="center" alignItems="center" spacing={3}>
          {userData?.role === "nurse" && (
            <Grid item>
              <CardBase
                withShadow
                liftUp
                className={classes.card}
                onClick={() => router.push("/daily-info")}
              >
                <>
                  <img src="/svg/nurses.svg" width={"300px"}></img>
                  <Typography>Nurses</Typography>
                </>
              </CardBase>
            </Grid>
          )}
          {userData?.role === "patient" && (
            <Grid item>
              <CardBase
                withShadow
                liftUp
                className={classes.card}
                onClick={() => {
                  router.push("/patient/daily-info");
                }}
              >
                <>
                  <img src="/svg/patient.svg" width={"300px"}></img>
                  <Typography>Patients</Typography>
                </>
              </CardBase>
            </Grid>
          )}
        </Grid>
      </>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.covid}
      >
        <Grid item>
          <Button>
            <CovidAnimation />
            <Typography>Find COVID Report Using AI</Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AuthHome;
