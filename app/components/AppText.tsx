import React from "react";
import { Text } from "react-native";
import style from "../config/style";
interface IAppTextProps {
  style?: any;
}

const AppText: React.FunctionComponent<IAppTextProps> = ({
  children,
  style,
}) => {
  return <Text style={style}>{children}</Text>;
};

export default AppText;
