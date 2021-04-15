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
function PostAlerts() {
  const classes = useStyles();
  const [state, setState] = React.useState({});
  const [loginState, setLoginState] = useLocalStorage("auth", false);
  const [userData, setUserData] = useLocalStorage("user-data", {});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
    console.log({ [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    console.log(state);

    const stateToSend = { ...state, user: userData?.username };
    console.log(stateToSend);
    await axios
      .post("/api/patient/alert", stateToSend)
      .then((res) => {
        console.log(res.data);
        alert("alert sent!!");
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
          <SectionHeader title="Send Alert To Medical" titleVariant="h2" />
        </Grid>
        <Grid item>
          <CardBase withShadow liftUp={false} style={{ minWidth: 400 }}>
            <>
              <Grid container spacing={3} direction="column">
                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="alert Type"
                    defaultValue=""
                    fullWidth
                    name="alertType"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="alert Description"
                    defaultValue=""
                    fullWidth
                    name="alertDescription"
                    onChange={handleChange}
                  />
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

export default PostAlerts;
