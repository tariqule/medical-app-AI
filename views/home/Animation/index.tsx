import React from "react";
import Lottie from "react-lottie";
import Scanning from "../../../public/lottie/scanning";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Scanning,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
function Animation() {
  return (
    <div>
      <Lottie options={defaultOptions} width={"50%"} />
    </div>
  );
}

export default Animation;
