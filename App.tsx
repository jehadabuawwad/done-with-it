import { useState } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
import colors from "./app/config/colors";

interface IDoneWithItProps {}

const Stack = createStackNavigator();

const StackNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={WelcomeScreen} />
      <Stack.Screen
        options={{
          title: "User Login",
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: colors.offOrange },
        }}
        name='Login'
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator: React.FunctionComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#eee",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
        name='Home'
        component={WelcomeScreen}
      />
      <Tab.Screen name='Login' component={LoginScreen} />
    </Tab.Navigator>
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
      {/* <TabNavigator /> */}
    </NavigationContainer>
  );
};
export default DoneWithIt;
