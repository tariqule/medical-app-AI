import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import React from "react";
import CardBase from "../../components/CardBase";
import SectionHeader from "../../components/SectionHeader";
{
  /* username
  firstName
  lastName
  password
  role
  info */
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      // margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);
function DailyInfo() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bodyTemperature: 0,
    heartRate: 0,
    bloodTemperature: 0,
    respiratoryRate: 0,
    weight: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={5}
        direction="column"
      >
        <Grid item>
          <SectionHeader title="Add My Daily Info" titleVariant="h2" />
        </Grid>
        <Grid item>
          <CardBase withShadow liftUp={false} style={{ minWidth: 400 }}>
            <>
              <Grid container spacing={3} direction="column">
                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="Pulse Rate (heart Rate)"
                    placeholder="E.g 80"
                    defaultValue=""
                    fullWidth
                    onChange={handleChange}
                    name="heartRate"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="Blood Pressure"
                    placeholder="E.g 120/80"
                    defaultValue=""
                    fullWidth
                    onChange={handleChange}
                    name="bloodTemperature"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="Weight"
                    placeholder="E.g 180.6"
                    defaultValue=""
                    fullWidth
                    name="weight"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="Temperature (C)"
                    placeholder="E.g 36.6"
                    defaultValue=""
                    fullWidth
                    onChange={handleChange}
                    name="bodyTemperature"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="Respiratory Rate (per minute)"
                    placeholder="E.g 16"
                    defaultValue=""
                    fullWidth
                    name="respiratoryRate"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </>
          </CardBase>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" size="large">
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default DailyInfo;
