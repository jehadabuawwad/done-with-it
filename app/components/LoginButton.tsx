import { StyleSheet, TouchableHighlight, View, Text } from "react-native";

interface IButtonProps {
  title: string;
}

const handleLogin = () => {};

const LoginButton: React.FunctionComponent<IButtonProps> = (props) => {
  const { title } = props;

  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor='#ffffff00'
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
    backgroundColor: "#ea676a",
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
    color: "#fff",
    fontWeight: "700",
    fontSize: 17,
  },
});
