import {
  Button,
  CircularProgress,
  colors,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import axios from "axios";
import router from "next/router";
import React from "react";
import CardBase from "../../components/CardBase";
import SectionHeader from "../../components/SectionHeader";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const useStyles = makeStyles((theme) => ({
  card: {
    // cursor: "pointer",
    borderRadius: "100px",
  },
  covid: {
    marginTop: theme.spacing(3),
  },
  Button: {
    marginTop: theme.spacing(7),
    borderRadius: "100px",
  },
}));
function ResultsPage() {
  const classes = useStyles();
  const [state, setState] = React.useState<any>();
  // const [res, setRes] = useLocalStorage("rs", {});

  const [covid, setCovid] = useLocalStorage("sad-data", {});
  const [res, setRes] = useLocalStorage("rs", {});

  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const {
      fever,
      cough,
      headache,
      soreThroat,
      difficultyBreathing,
    } = router.query;

    const dataToSend = {
      fever: Boolean(fever),
      cough: Boolean(cough),
      headache: Boolean(headache),
      soreThroat: Boolean(soreThroat),
      difficultyBreathing: Boolean(difficultyBreathing),
    };
    console.log("das" + JSON.stringify(dataToSend));
    const fetch = async () => {
      await axios
        .post("/api/covidTest", covid)
        .then((res) => {
          console.log(res.data);
          setState(res.data);
          setLoading(false);
          setRes(res.data);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    };
    fetch();

    console.log(router.query);
  }, []);

  // React.useEffect(() => {
  //   setState(res);
  // }, [res]);
  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size="large" style={{ width: "20%" }} />
        </div>
      ) : (
        <>
          <SectionHeader
            title="Results"
            titleVariant={"h2"}
            subtitle="Our AI has given the results below"
          />

          <Grid
            container
            justify="center"
            alignItems="center"
            spacing={3}
            direction="column"
          >
            {/* // */}
            <Grid item>
              <CardBase withShadow liftUp className={classes.card}>
                <>
                  <Typography variant={"h4"}>
                    Probability of having covid is{" "}
                    {state && Math.floor(state[0])}%
                  </Typography>
                  {state && state[0] < 50 && (
                    <>
                      <Typography variant={"body1"} className={classes.covid}>
                        You have less chance of having covid
                      </Typography>
                    </>
                  )}
                  {state && state[0] > 70 && state[0] < 80 && (
                    <>
                      <Typography variant={"body1"} className={classes.covid}>
                        You have moderate chance of having covid
                      </Typography>
                    </>
                  )}
                  {state && state[0] > 80 && (
                    <>
                      <Typography variant={"body1"} className={classes.covid}>
                        You need to see a doctor/nurse ASAP
                      </Typography>
                    </>
                  )}
                </>
              </CardBase>
            </Grid>
            <Grid item>
              <Bar value={state && state[0]} />
            </Grid>
            <Grid>
              <Button
                onClick={() => router.push("/")}
                size="large"
                variant="outlined"
                className={classes.Button}
              >
                Back to Dashboard
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
}

export default ResultsPage;

const useStyless = makeStyles({
  root: {
    flexGrow: 1,
    minWidth: "400px",
  },
});

function Bar(props) {
  const classes = useStyless();
  const BorderLinearProgress = withStyles((theme: Theme) =>
    createStyles({
      root: {
        height: 30,
        borderRadius: 5,
      },
      colorPrimary: {
        backgroundColor:
          theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
      },
      bar: {
        borderRadius: 5,
        backgroundColor:
          props.value > 80
            ? colors.red[700]
            : props.value > 50 && props.value < 80
            ? colors.yellow[700]
            : "blue",
      },
    })
  )(LinearProgress);
  return (
    <div className={classes.root}>
      <br />
      <BorderLinearProgress variant="determinate" value={props.value} />
    </div>
  );
}
