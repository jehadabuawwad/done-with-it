import { StyleSheet, TouchableHighlight, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import rouets from "../config/rouets";
import colors from "../config/colors";
import React from "react";

interface IButtonProps {
  title: string;
}

const LoginButton: React.FunctionComponent<IButtonProps> = ({ title }) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor={colors.transparance}
      onPress={() => navigation.navigate(rouets.LOGIN)}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.offOrange,
    borderRadius: 25,
    width: 350,
    height: 100,
    flex: 0.2,
    flexGrow: 0.25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: { bottom: -270 },
  text: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 17,
  },
});

export default LoginButton;
