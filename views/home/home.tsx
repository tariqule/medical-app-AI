import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CardBase from "../../components/CardBase";
import SectionHeader from "../../components/SectionHeader";
const useStyles = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
    borderRadius: "100px",
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
      </>
    </div>
  );
}

export default Home;
