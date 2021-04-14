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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);
function Signin() {
  const classes = useStyles();
  const [state, setState] = React.useState<any>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
    console.log({ [event.target.name]: event.target.value });
  };
  const [userData, setUserData] = useLocalStorage("user-data", {});
  const [loginState, setLoginState] = useLocalStorage("auth", false);

  const handleSubmit = async () => {
    await axios
      .post("/api/login", state, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setUserData(res.data?.user);
        setLoginState(true);
      })
      .then(() => {
        router.push("/");
      })
      .catch((err) => {});

    console.log(state);
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
          <SectionHeader title="Sign In To Use Medical App" titleVariant="h2" />
        </Grid>
        <Grid item>
          <CardBase withShadow liftUp={false} style={{ minWidth: 400 }}>
            <>
              <Grid container spacing={3} direction="column">
                <Grid item>
                  <TextField
                    required
                    onChange={handleChange}
                    id="standard-TextField"
                    label="Username"
                    defaultValue=""
                    fullWidth
                    name="username"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="password"
                    defaultValue=""
                    fullWidth
                    name="password"
                    onChange={handleChange}
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
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Sign in
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signin;
