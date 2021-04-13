import React from "react";
import useIntro from "../hooks/useIntro";
import { useLocalStorage } from "../hooks/useLocalStorage";
import MainLayout from "../layouts";
import AuthHome from "../views/authHome";
import Home from "../views/home";
import Animation from "../views/home/Animation";

export default function IndexPage() {
  const [state] = useIntro();
  const [loginState, setState] = useLocalStorage("auth", false);

  return (
    <MainLayout>
      {!state ? loginState ? <AuthHome /> : <Home /> : <Animation />}
    </MainLayout>
  );
}
