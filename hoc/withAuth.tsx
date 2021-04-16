import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Signin from "../views/signin";
const withAuth = (WrappedComponent) => {
  const privatePage = "You need to sign in to view this page";
  const HOC = (props) => {
    const [loginState, setLoginState] = useLocalStorage("auth", false);

    return loginState ? (
      <WrappedComponent {...props} />
    ) : (
      <Signin privatePage={privatePage} />
    );
  };

  return HOC;
};

export default withAuth;
