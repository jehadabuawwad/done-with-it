import Constants from "expo-constants";
import { StyleSheet, SafeAreaView } from "react-native";

import colors from "../config/colors";

interface IScreenProps {}

const Screen: React.FunctionComponent<IScreenProps> = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.cardBackground,
  },
});
export default Screen;
