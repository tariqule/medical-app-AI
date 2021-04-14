import React from "react";
import MainLayout from "../../../layouts";
import ViewAllPatients from "../../../views/viewAllPatients";

function index() {
  return (
    <MainLayout>
      <ViewAllPatients />
    </MainLayout>
  );
}

export default index;
