import { StyleSheet, TouchableHighlight, View, Text } from "react-native";

interface IButtonProps {
  title: string;
}

const handleRegister = () => {};

const RegisterButton: React.FunctionComponent<IButtonProps> = (props) => {
  const { title } = props;

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

export default RegisterButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#72cac3",
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
    color: "#fff",
    fontWeight: "700",
    fontSize: 17,
  },
});
