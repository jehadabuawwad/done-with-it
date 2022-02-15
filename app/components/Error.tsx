import { StyleSheet } from "react-native";

import AppText from "./AppText";

import colors from "../config/colors";

interface IErrorMessage {
  error?: Object;
  visiable?: Object;
}

const ErrorMessage: React.FunctionComponent<IErrorMessage> = ({
  error,
  visiable,
}) => {
  if (!error || !visiable) return null;
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
