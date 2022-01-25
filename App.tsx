import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View, Dimensions, Platform } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
export default function App() {
  const { landscape } = useDeviceOrientation();
  // Information about dimenstions of screen
  // console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
          marginTop: Platform.OS === "android" ? 25 : 0,
        }}
      >
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}
