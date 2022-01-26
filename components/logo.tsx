import { StyleSheet, View, Text, Image } from "react-native";

interface IImageProps {
  title: string;
}

const Logo: React.FunctionComponent<IImageProps> = (props) => {
  const { title } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    flex: 1,
    flexGrow: 0.25,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: -200,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    top: 15,
    width: 350,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    color: "#1e1e1e",
    fontWeight: "700",
  },
});
