import { useState } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "./app/components/Screen";
import { AppTextInput } from "./app/components/TextInput";
import Card from "./app/components/Card";
import Picker from "./app/components/Picker";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessageScreen";
import LoginScreen from "./app/screens/LoginScreen";
import DetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

interface IDoneWithItProps {}

const Stack = createStackNavigator();

const StackNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={WelcomeScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  );
};

const DoneWithIt: React.FunctionComponent<IDoneWithItProps> = (props) => {
  // const categories = [
  //   { label: "Furniture", value: 1 },
  //   { label: "Clothing", value: 2 },
  //   { label: "Cameras", value: 3 },
  // ];
  // const [category, setCategory] = useState(categories[0]);
  // const { landscape } = useDeviceOrientation();
  // Information about dimenstions of screen
  // console.log(Dimensions.get("screen"));
  // const image = { uri: "../assets/background.jpg" };

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default DoneWithIt;
