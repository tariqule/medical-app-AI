import {
  Button,
  createStyles,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
  TextField,
  Theme,
} from "@material-ui/core";
import axios from "axios";
import React from "react";
import CardBase from "../../components/CardBase";
import SectionHeader from "../../components/SectionHeader";
import { useLocalStorage } from "../../hooks/useLocalStorage";
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
      marginLeft: "10px",
      minWidth: 120,
      maxWidth: 355,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);
function DailyTipNurse() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    tipName: "",
    tipDescription: "",
  });
  const [userData, setUserData] = useLocalStorage("user-data", {});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
    console.log({ [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    console.log(state);
    const sendDailyTip = async () =>
      await axios.post("/api/nurse/dailytip", state);

    sendDailyTip()
      .then((res) => {
        console.log(res.data);
        alert("Daily Tip Sent");
      })
      .catch((err) => console.log(err));
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
          <SectionHeader title="Add Daily Tips" titleVariant="h2" />
        </Grid>
        <Grid item>
          <CardBase withShadow liftUp={false} style={{ minWidth: 400 }}>
            <>
              <Grid container spacing={3} direction="column">
                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="Tip Title"
                    defaultValue=""
                    fullWidth
                    onChange={handleChange}
                    name="tipName"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="Tip Description"
                    defaultValue=""
                    fullWidth
                    onChange={handleChange}
                    name="tipDescription"
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
            Send Daily Tips
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default DailyTipNurse;
