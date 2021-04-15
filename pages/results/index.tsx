import React from "react";
import MainLayout from "../../layouts";
import ResultsPage from "../../views/resultsPage";
import Signin from "../../views/signin";
import router from "next/router";
import axios from "axios";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { CircularProgress, Grid } from "@material-ui/core";
function index() {
  const [covid, setCovid] = useLocalStorage("sad-data", {});
  const [res, setRes] = useLocalStorage("rs", {});

  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
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
          setRes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetch();

    console.log(router.query);
  }, []);
  return (
    <MainLayout>
      {loading ? (
        <CircularProgress
          size="large"
          style={{
            width: "20%",
            marginLeft: "760px",
            display: "grid",
            placeItem: "center",
          }}
        />
      ) : (
        <ResultsPage />
      )}
    </MainLayout>
  );
}

export default index;
