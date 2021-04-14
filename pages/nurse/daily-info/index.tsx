import React from "react";
import MainLayout from "../../../layouts";
import AddVitals from "../../../views/addVitals";
import NurseMain from "../../../views/nurseMain";

function index() {
  return (
    <MainLayout>
      <NurseMain />
    </MainLayout>
  );
}

export default index;
