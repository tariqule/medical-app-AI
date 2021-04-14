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
function AddVitals() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bodyTemperature: 0,
    heartRate: 0,
    bloodTemperature: 0,
    respiratoryRate: 0,
    weight: 0,
  });
  const [user, setUser] = React.useState<any>();
  const [selectedUser, setSelectedUser] = React.useState<any>();

  const [userData, setUserData] = useLocalStorage("user-data", {});

  React.useEffect(() => {
    const fetchAllUser = async () => await axios.get("/api/user");

    fetchAllUser()
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
    console.log({ [event.target.name]: Number(event.target.value) });
  };
  const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedUser({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    console.log(state);

    const sendInfo = async () =>
      await axios
        .post(
          `/api/info/${
            (userData?.role === "patient" && userData?.username) ||
            selectedUser?.user
          }`,
          {
            bodyTemperature: Number(state.bloodTemperature),
            heartRate: Number(state.heartRate),
            bloodTemperature: Number(state.bloodTemperature),
            respiratoryRate: Number(state.respiratoryRate),
            weight: Number(state.weight),
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));

    sendInfo();
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
          <SectionHeader title="Add Vital Signs" titleVariant="h2" />
        </Grid>
        <Grid item>
          <CardBase withShadow liftUp={false} style={{ minWidth: 400 }}>
            <>
              <Grid container spacing={3} direction="column">
                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="blood Temperature (c)"
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
                    label="Body Temperature (c)"
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
                    label="Heart Rate (per minute)"
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
                    label="Weight"
                    defaultValue=""
                    fullWidth
                    onChange={handleChange}
                    name="weight"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="Respiratory Rate"
                    defaultValue=""
                    fullWidth
                    onChange={handleChange}
                    name="respiratoryRate"
                  />
                </Grid>
                <Grid>
                  {userData?.role !== "patient" && (
                    <FormControl className={classes.formControl} fullWidth>
                      <InputLabel htmlFor="Patient-native-simple" shrink={true}>
                        Patient
                      </InputLabel>
                      <Select
                        native
                        value={selectedUser?.user}
                        onChange={handleChangeSelect}
                        inputProps={{
                          name: "user",
                          id: "user-native-simple",
                          shrink: false,
                        }}
                      >
                        {!selectedUser && (
                          <option
                            aria-label="Select a Patient"
                            value="Select a Patient"
                          />
                        )}
                        {user?.map((data: any) => (
                          <option value={data.username}>
                            {data.firstName}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  )}
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
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddVitals;
