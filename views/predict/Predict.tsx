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
import router from "next/router";
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
    fever: false,
    cough: false,
    headache: false,
    soreThroat: false,
    difficultyBreathing: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { fever, headache, cough, soreThroat, difficultyBreathing } = state;
  const error =
    [fever, cough, headache, soreThroat, difficultyBreathing].filter((v) => v)
      .length < 1;

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
                            checked={fever}
                            onChange={handleChange}
                            name="fever"
                          />
                        }
                        label="Have fever?"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={cough}
                            onChange={handleChange}
                            name="cough"
                          />
                        }
                        label="Is there cough?"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={headache}
                            onChange={handleChange}
                            name="headache"
                          />
                        }
                        label="Is there headache?"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={soreThroat}
                            onChange={handleChange}
                            name="soreThroat"
                          />
                        }
                        label="Have sore throat?"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={difficultyBreathing}
                            onChange={handleChange}
                            name="difficultyBreathing"
                          />
                        }
                        label="Is there difficulty in  Breathing?"
                      />
                    </FormGroup>
                    {/* <FormHelperText>You can display an error</FormHelperText> */}
                  </FormControl>
                </Grid>
              </Grid>
            </>
          </CardBase>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              console.log(state);
              router.push({
                pathname: "/results",
                query: state,
              });
            }}
            size="large"
            disabled={error}
          >
            Predict
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Predict;
