import { useState } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { NavigationContainer } from "@react-navigation/native";

import { AppTextInput } from "./app/components/TextInput";
import Card from "./app/components/Card";
import Picker from "./app/components/Picker";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AccountScreen from "./app/screens/AccountScreen";

import NavigationTheme from "./app/navigation/NavigationTheme";
import AuthNavigation from "./app/navigation/AuthNavigation";
import AppNavigator from "./app/navigation/AppNavigator";
import Screen from "./app/components/Screen";
import colors from "./app/config/colors";

interface IDoneWithItProps {}

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
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};
export default DoneWithIt;
