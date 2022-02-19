import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector } from "react-redux";
import { rootStore } from "./app/features/rootStore";

import AppNavigator from "./app/navigation/AppNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AuthNavigation from "./app/navigation/AuthNavigation";
import AuthContext from "./app/features/context/auth";

interface IDoneWithItProps {}

const DoneWithIt: React.FunctionComponent<IDoneWithItProps> = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      <Provider store={rootStore}>
        <NavigationContainer theme={NavigationTheme}>
          {!userLoggedIn ? <AuthNavigation /> : <AppNavigator />}
        </NavigationContainer>
      </Provider>
    </AuthContext.Provider>
  );
};
export default DoneWithIt;
