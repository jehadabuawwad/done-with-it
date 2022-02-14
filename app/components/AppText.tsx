import React from "react";
import { StyleSheet, Text } from "react-native";

interface IAppTextProps {
  style: any;
}

const AppText: React.FunctionComponent<IAppTextProps> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: { fontSize: 18 },
});
export default AppText;
