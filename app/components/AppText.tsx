import React from "react";
import { Text } from "react-native";

import defaultStyle from "../config/style";

interface IAppTextProps {
  style: any;
}

const AppText: React.FunctionComponent<IAppTextProps> = ({
  children,
  style,
}) => {
  return <Text style={[defaultStyle.text, style]}>{children}</Text>;
};

export default AppText;
