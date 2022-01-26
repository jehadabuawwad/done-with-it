import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: "royalblue",
          borderRadius: 50,
          shadowColor: "gray",
          shadowOffset: { width: -10, height: 10 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          padding: 15,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "gold",
            borderRadius: 25,
          }}
        ></View>
      </View>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: "tomato",
          margin: 20,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
