import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface IAppButtonProps {
  title: string;
  handlePress: Function;
}

const AppButton: React.FunctionComponent<IAppButtonProps> = ({
  title,
  handlePress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 100,
    borderWidth: 1,
    backgroundColor: "#fc5c65",
    padding: 5,
    justifyContent: "center",
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    top: 10,
    borderRadius: 100,
  },
  text: {
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: 30,
  },
});
