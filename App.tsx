import { View } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
export default function App() {
  const { landscape } = useDeviceOrientation();
  // Information about dimenstions of screen
  // console.log(Dimensions.get("screen"));

  return (
    <View
      style={{
        width: "100%",
        height: landscape ? "100%" : "30%",
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          height: 100,
          width: 400,
          flex: -1,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          position: "absolute",
          top: 50,
          left: 10,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
