import React from "react";

function useIntro() {
  const [state, setState] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 2000);
  }, []);
  return [state];
}

export default useIntro;
