import React from "react";
import Lottie from "react-lottie";
import Covid from "../../../public/lottie/covid";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Covid,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
function CovidAnimation() {
  return (
    <div>
      <Lottie options={defaultOptions} width={100} />
    </div>
  );
}

export default CovidAnimation;
