import React from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";

import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/colors";

interface IAuthNavigationProps {}

const Stack = createStackNavigator();

const AuthNavigation: React.FunctionComponent<IAuthNavigationProps> = () => {
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
export default AuthNavigation;
