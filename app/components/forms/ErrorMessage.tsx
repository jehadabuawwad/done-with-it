import { StyleSheet } from "react-native";

import AppText from "../Text";

import colors from "../../config/colors";
import React from "react";

interface IErrorMessage {
  error?: Object;
  visible?: Object;
}

const ErrorMessage: React.FunctionComponent<IErrorMessage> = ({
  error,
  visible,
}) => {
  if (!error || !visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: colors.red,
    fontSize: 12,
    paddingLeft: 10,
  },
});

export default ErrorMessage;
