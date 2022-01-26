import { StyleSheet, TouchableHighlight, View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import colors from "../config/colors";

interface IButtonProps {
  title: string;
}

const handleLogin = () => {};

const LoginButton: React.FunctionComponent<IButtonProps> = (props) => {
  const { title } = props;

  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor={colors.transparance}
      onPress={() => handleLogin()}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default LoginButton;

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
