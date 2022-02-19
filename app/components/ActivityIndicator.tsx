import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

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
    <View style={styles.ovarlay}>
      <AnimatedLottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ovarlay: {
    backgroundColor: "white",
    opacity: 0.8,
    zIndex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default ActivityIndicator;
