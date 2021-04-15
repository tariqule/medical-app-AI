import React from "react";
import MainLayout from "../../layouts";
import PostAlerts from "../../views/postAlerts";

function index() {
  return (
    <MainLayout>
      <PostAlerts />
    </MainLayout>
  );
}

export default index;
