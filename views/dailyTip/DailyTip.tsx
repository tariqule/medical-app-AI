import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core";
import axios from "axios";
import router from "next/router";
import React from "react";
import CardBase from "../../components/CardBase";
import SectionHeader from "../../components/SectionHeader";
import withAuth from "../../hoc/withAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";

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
function DailyTip() {
  const classes = useStyles();
  const [data, setData] = React.useState<any>();

  const [userData, setUserData] = useLocalStorage("user-data", {});
  const [loginState, setLoginState] = useLocalStorage("auth", false);

  const fetch = async () => {
    return await axios.get("/api/patient/dailytip");
  };
  React.useEffect(() => {
    fetch().then((res) => {
      setData(res.data[res.data.length - 1]);
      console.log(res.data);
    });
  }, []);

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
          <SectionHeader title="Daily Tips From Nurse" titleVariant="h2" />
        </Grid>
        <Grid item>
          <CardBase withShadow liftUp={false} style={{ minWidth: 400 }}>
            <>
              <SectionHeader
                title={data?.tipName}
                subtitle={data?.tipDescription}
                subtitleVariant={"h5"}
                titleVariant="h4"
              />
            </>
          </CardBase>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              router.back();
            }}
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default withAuth(DailyTip);
