import React from "react";
import useIntro from "../hooks/useIntro";
import MainLayout from "../layouts";
import Home from "../views/home";
import Animation from "../views/home/Animation";

export default function IndexPage() {
  const [state] = useIntro();

  return <MainLayout>{!state ? <Home /> : <Animation />}</MainLayout>;
}
