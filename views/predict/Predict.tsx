import {
  MenuItem,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
  makeStyles,
  Theme,
  createStyles,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from "@material-ui/core";
import React from "react";
import CardBase from "../../components/CardBase";
import SectionHeader from "../../components/SectionHeader";
import MainLayout from "../../layouts";
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
    // formControl: {
    //   margin: theme.spacing(1),
    //   minWidth: 120,
    // },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
      display: "flex",
    },
    formControl: {
      // margin: theme.spacing(3),
    },
  })
);
function Predict() {
  // const [age, setAge] = React.useState("");

  const classes = useStyles();
  const [state, setState] = React.useState({
    age: false,
    jason: false,
    antoine: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { age, jason, antoine } = state;
  const error = [age, jason, antoine].filter((v) => v).length !== 2;

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
          <SectionHeader title="Disease Predictor" titleVariant="h2" />
        </Grid>
        <Grid item>
          <CardBase withShadow liftUp={false} style={{ minWidth: 400 }}>
            <>
              <Grid container spacing={3} direction="column">
                <Grid item>
                  <FormControl
                    required
                    error={error}
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">
                      Check the following
                    </FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={age}
                            onChange={handleChange}
                            name="age"
                          />
                        }
                        label="Older than 50 years old"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={jason}
                            onChange={handleChange}
                            name="jason"
                          />
                        }
                        label="Have chest pain"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={antoine}
                            onChange={handleChange}
                            name="antoine"
                          />
                        }
                        label="Fasting Blood sugar > 120mg/d"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={antoine}
                            onChange={handleChange}
                            name="antoine"
                          />
                        }
                        label="Have angina from exercising"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={antoine}
                            onChange={handleChange}
                            name="antoine"
                          />
                        }
                        label="Have angina from exercising"
                      />
                    </FormGroup>
                    {/* <FormHelperText>You can display an error</FormHelperText> */}
                  </FormControl>
                </Grid>

                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="Resting blood pressure (mmHg)"
                    defaultValue=""
                    fullWidth
                    type="number"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="Serum cholesterol in mg/d"
                    defaultValue=""
                    fullWidth
                    type="number"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="Maximum heart rate achieved"
                    defaultValue=""
                    fullWidth
                    type="number"
                  />
                </Grid>

                {/* <Grid item>
                      <TextField
                        required
                        id="standard-TextField"
                        label="info"
                        defaultValue=""
                        fullWidth
                      />
                    </Grid> */}
              </Grid>
            </>
          </CardBase>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" size="large">
            Predict
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Predict;
