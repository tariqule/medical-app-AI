import React from "react";
import MainLayout from "../../layouts";
import ResultsPage from "../../views/resultsPage";
import Signin from "../../views/signin";
import router from "next/router";
import axios from "axios";
function index() {
  React.useEffect(() => {
    const {
      fever,
      cough,
      headache,
      soreThroat,
      difficultyBreathing,
    } = router.query;
    const fetch = async () => {
      await axios
        .post("/api/covidTest", {
          fever: Boolean(fever),
          cough: Boolean(cough),
          headache: Boolean(headache),
          soreThroat: Boolean(soreThroat),
          difficultyBreathing: Boolean(difficultyBreathing),
        })
        .then((res) => {
          console.log(res.data);
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
