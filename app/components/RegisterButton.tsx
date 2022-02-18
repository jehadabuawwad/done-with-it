import React from "react";
import { StyleSheet, TouchableHighlight, View, Text } from "react-native";
import colors from "../config/colors";

interface IButtonProps {
  title: string;
}

const handleRegister = () => {};

const RegisterButton: React.FunctionComponent<IButtonProps> = ({ title }) => {
  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor='#ffffff00'
      onPress={() => handleRegister()}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.offGreen,
    borderRadius: 25,
    width: 350,
    height: 100,
    flex: 0.4,
    flexGrow: 0.25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: { bottom: -125 },
  text: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 17,
  },
});

export default RegisterButton;
