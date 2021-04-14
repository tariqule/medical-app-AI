import React from "react";
import MainLayout from "../../../layouts";
import AddVitals from "../../../views/addVitals";
import DailyInfo from "../../../views/dailyInfo";

function index() {
  return (
    <MainLayout>
      <AddVitals />
    </MainLayout>
  );
}

export default index;
