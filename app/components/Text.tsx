import React from "react";
import { Text } from "react-native";
import style from "../config/style";
interface IAppTextProps {
  style?: any;
  numberOfLines?: number;
}

const AppText: React.FunctionComponent<IAppTextProps> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={style} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
