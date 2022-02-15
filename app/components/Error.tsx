import { StyleSheet } from "react-native";

import AppText from "./AppText";

import colors from "../config/colors";

interface IErrorMessage {
  error: any;
}

const ErrorMessage: React.FunctionComponent<IErrorMessage> = ({ error }) => {
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
