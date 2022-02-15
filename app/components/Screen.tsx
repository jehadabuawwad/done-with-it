import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";

import style from "../config/style";

interface IScreenProps {}

const Screen: React.FunctionComponent<IScreenProps> = ({ children }) => {
  return <View style={style.screen}>{children}</View>;
};

export default Screen;
