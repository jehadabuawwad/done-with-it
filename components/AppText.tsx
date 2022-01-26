import * as React from "react";
import { Text, StyleSheet, Platform } from "react-native";

interface IAppTextProps {}

const AppText: React.FunctionComponent<IAppTextProps> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default AppText;
const styles = StyleSheet.create({
  text: {
    fontSize: Platform.OS === "android" ? 10 : 50,
    fontFamily: Platform.OS === "android" ? "Roboto" : "avenir",
  },
});
