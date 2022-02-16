import React from "react";
import { Text } from "react-native";

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
