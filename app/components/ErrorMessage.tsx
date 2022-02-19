import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

interface IErrorrMessageProps {
  error: string;
}

const ErrorMessage: React.FunctionComponent<IErrorrMessageProps> = ({
  error,
}) => {
  return <Text style={styles.text}>{error}</Text>;
};
const styles = StyleSheet.create({
  text: {
    color: colors.red,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "75%",
  },
});
export default ErrorMessage;
