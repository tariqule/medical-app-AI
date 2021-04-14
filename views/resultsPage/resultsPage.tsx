import {
  Button,
  colors,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
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
  const [state, setState] = React.useState(Math.floor(Math.random() * 100));
  const [res, setRes] = useLocalStorage("rs", {});

  React.useEffect(() => {
    setState(res);
  }, [res]);
  return (
    <div>
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
          <Grid item>
            <CardBase withShadow liftUp className={classes.card}>
              <>
                <Typography variant={"h4"}>
                  Probability of having covid is {Math.floor(res[0])}%
                </Typography>
                {state < 50 && (
                  <>
                    <Typography variant={"body1"} className={classes.covid}>
                      You have less chance of having covid
                    </Typography>
                  </>
                )}
                {state > 70 && state < 80 && (
                  <>
                    <Typography variant={"body1"} className={classes.covid}>
                      You have moderate chance of having covid
                    </Typography>
                  </>
                )}
                {state > 80 && (
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
            <Bar value={state} />
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
