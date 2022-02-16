import { StyleSheet, SafeAreaView, View } from "react-native";
import Constants from "expo-constants";

import colors from "../config/colors";

interface IScreenProps {
  style?: any;
}

const Screen: React.FunctionComponent<IScreenProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: colors.white,
    flex: 1,
  },
  view: { flex: 1 },
});
export default Screen;
