import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";

interface IDoneWithItProps {}

const DoneWithIt: React.FunctionComponent<IDoneWithItProps> = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};
export default DoneWithIt;
