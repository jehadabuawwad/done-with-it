import { StyleSheet, View, ImageBackground } from "react-native";
import RegisterButton from "../components/RegisterButton";
import LoginButton from "../components/LoginButton";
import Logo from "../components/Logo";
import colors from "../config/colors";
interface IScreenProps {
  title: string;
  orintation: boolean;
}

const WelcomeScreen: React.FunctionComponent<IScreenProps> = (props) => {
  const { title, orintation } = props;

  return (
    <ImageBackground
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
      }}
      source={require("../assets/background.jpg")}
    >
      <View
        style={{
          width: "100%",
          height: orintation ? "100%" : "30%",
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Logo title="Sell What You Don't Need" />
        <LoginButton title='LOGIN' />
        <RegisterButton title='REGISTER' />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

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
    color: colors.brownyBlack,
    fontWeight: "700",
  },
});
