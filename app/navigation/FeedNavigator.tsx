import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

interface IFeedNavigatorProps {}

const Stack = createStackNavigator();

const FeedNavigator: React.FunctionComponent<IFeedNavigatorProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: "modal",
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='Listings'
        component={ListingsScreen}
      />
      <Stack.Screen
        name='ListingsDetails'
        component={ListingDetailsScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
