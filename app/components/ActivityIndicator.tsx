import AnimatedLottieView from "lottie-react-native";
import React from "react";

interface IActivityIndicatorProps {
  visible?: boolean;
}

const ActivityIndicator: React.FunctionComponent<IActivityIndicatorProps> = ({
  visible = false,
}) => {
  if (!visible) {
    return null;
  }
  return (
    <AnimatedLottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    ></AnimatedLottieView>
  );
};

export default ActivityIndicator;
