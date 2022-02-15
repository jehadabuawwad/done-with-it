import Constants from "expo-constants";
import colors from "./colors";

export default {
  defaultText: {
    color: colors.black,
  },
  errorText: {
    color: colors.red,
  },
  screen: {
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: colors.white,
  },
};
