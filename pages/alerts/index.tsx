import React from "react";
import MainLayout from "../../layouts";
import ResultsPage from "../../views/resultsPage";
import ViewAllAlerts from "../../views/viewAllAlerts";
function index() {
  return (
    <MainLayout>
      <ViewAllAlerts />
    </MainLayout>
  );
}

export default index;
