import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { rootStore } from "./app/features/rootStore";

import AppNavigator from "./app/navigation/AppNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AuthNavigation from "./app/navigation/AuthNavigation";

interface IDoneWithItProps {}

const DoneWithIt: React.FunctionComponent<IDoneWithItProps> = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Provider store={rootStore}>
        <AuthNavigation />
        {/* <AppNavigator /> */}
      </Provider>
    </NavigationContainer>
  );
};
export default DoneWithIt;
