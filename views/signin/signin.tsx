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
  const [age, setAge] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
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
                    id="standard-TextField"
                    label="Username"
                    defaultValue=""
                    fullWidth
                  />
                </Grid>

                <Grid item>
                  <TextField
                    required
                    id="standard-TextField"
                    label="password"
                    defaultValue=""
                    fullWidth
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
            Sign in
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signin;
