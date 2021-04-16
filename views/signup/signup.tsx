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
} from "@material-ui/core";
import axios from "axios";
import React from "react";
import CardBase from "../../components/CardBase";
import SectionHeader from "../../components/SectionHeader";
import { useLocalStorage } from "../../hooks/useLocalStorage";
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
    formControl: {
      // margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);
function Signup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    role: "",
  });
  const [loginState, setLoginState] = useLocalStorage("auth", false);
  const [userData, setUserData] = useLocalStorage("user-data", {});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
    console.log({ [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    console.log(state);
    await axios
      .post("/api/register", state)
      .then((res) => {
        if (res.statusText === "OK") setLoginState(true);
        setUserData(state);
      })
      .then(() => {
        router.push("/?status=success&show-pop=true");
      })
      .catch((err) => {
        alert(err);
      });
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
          <SectionHeader title="Sign Up To Get Started" titleVariant="h2" />
        </Grid>
        <Grid item>
          <CardBase withShadow liftUp={false} style={{ minWidth: 400 }}>
            <>
              <Grid container spacing={3} direction="column">
                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="Username"
                    defaultValue=""
                    fullWidth
                    name="username"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="firstName"
                    defaultValue=""
                    fullWidth
                    name="firstName"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="lastName"
                    defaultValue=""
                    fullWidth
                    name="lastName"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="password"
                    defaultValue=""
                    fullWidth
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item>
                  <FormControl className={classes.formControl} fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={state.role}
                      name="role"
                      onChange={handleChange}
                    >
                      <MenuItem value={"nurse"}>Nurse</MenuItem>
                      <MenuItem value={"patient"}>Patient</MenuItem>
                    </Select>
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
            size="large"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;
