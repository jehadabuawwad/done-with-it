import React from "react";
import {  Text } from "react-native";
import style from "../config/style";
interface IAppTextProps {
  error: boolean;
}

const AppText: React.FunctionComponent<IAppTextProps> = ({
  children,
  error,
  ...otherProps
}) => {
  let element: any;
  {
    !error
      ? (element = (
          <Text style={style.defaultText} {...otherProps}>
            {children}
          </Text>
        ))
      : (element = (
          <Text style={style.errorText} {...otherProps}>
            {children}
          </Text>
        ));
  }
  return element;
};

export default AppText;
