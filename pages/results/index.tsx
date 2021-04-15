import React from "react";
import MainLayout from "../../layouts";
import ResultsPage from "../../views/resultsPage";
import Signin from "../../views/signin";
import router from "next/router";
import axios from "axios";
import { useLocalStorage } from "../../hooks/useLocalStorage";
function index() {
  const [covid, setCovid] = useLocalStorage("sad-data", {});
  const [res, setRes] = useLocalStorage("rs", {});

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
      <ResultsPage />
    </MainLayout>
  );
}

export default index;
