import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector } from "react-redux";
import AppLoading from "expo-app-loading";

import { rootStore } from "./app/features/rootStore";
import AuthContext from "./app/features/context/auth";

import AppNavigator from "./app/navigation/AppNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AuthNavigation from "./app/navigation/AuthNavigation";
import ActivityIndicator from "./app/components/ActivityIndicator";

interface IDoneWithItProps {}

const DoneWithIt: React.FunctionComponent<IDoneWithItProps> = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [ready, setReady] = useState(false);

  const restoreLogin = async () => {
    await setUserLoggedIn(false);
  };

  if (!ready) {
    return (
      <AppLoading
        startAsync={restoreLogin}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    );
  }

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
