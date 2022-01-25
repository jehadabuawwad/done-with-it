import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
} from "react-native";

export default function App() {
  // Information about dimenstions of screen
  // console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    width: "50%",
    height: 70,
    marginTop: Platform.OS === "android" ? "8%" : 0,
  },
});
