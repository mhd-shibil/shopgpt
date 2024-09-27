import { useEffect, useRef } from "react";
import Lottie from "lottie-react";

import groovyWalkAnimation from "./groovy.json";

const Loader = () => {
  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1.5); // Increase the speed (2x in this case)
    }
  }, []);
  const style = {
    height: 150,
  };
  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={groovyWalkAnimation}
      loop={true}
      style={style}
    />
  );
};

export default Loader;
