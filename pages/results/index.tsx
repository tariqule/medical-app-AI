import React from "react";
import MainLayout from "../../layouts";
import ResultsPage from "../../views/resultsPage";
import Signin from "../../views/signin";
import router from "next/router";
import axios from "axios";
import { useLocalStorage } from "../../hooks/useLocalStorage";
function index() {
  return (
    <MainLayout>
      <ResultsPage />
    </MainLayout>
  );
}

export default index;
