import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { rootStore } from "./app/features/rootStore";

import AppNavigator from "./app/navigation/AppNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";

interface IDoneWithItProps {}

const DoneWithIt: React.FunctionComponent<IDoneWithItProps> = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Provider store={rootStore}>
        <AppNavigator />
      </Provider>
    </NavigationContainer>
  );
};
export default DoneWithIt;
