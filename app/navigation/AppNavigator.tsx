import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountScreen from "../screens/AccountScreen";
import ListingButton from "./ListingButton";

interface IAppNavigatorProps {}

const Tab = createBottomTabNavigator();

const AppNavigator: React.FunctionComponent<IAppNavigatorProps> = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarStyle:
          Platform.OS == "android"
            ? {
                height: 70,
              }
            : { height: 90 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
        name='Feed'
        component={FeedNavigator}
      />
      <Tab.Screen
        options={{
          tabBarButton: () => <ListingButton />,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
        name='ListingEdit'
        component={ListingEditScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' color={color} size={size} />
          ),
        }}
        name='Account'
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
