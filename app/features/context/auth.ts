import React from "react";

interface AppContextInterface {
  userLoggedIn: boolean;
  setUserLoggedIn: any;
}
const AuthContext = React.createContext<AppContextInterface | null>(null);

export default AuthContext;
