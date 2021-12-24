import React, { ReactNode, useReducer } from "react";
import authReducer from "../reducers/AuthReducer";
import AuthContext, { initUser } from "./AuthContext";
interface AuthContextProps {
  children: ReactNode;
}
const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [state, dispatch] = useReducer(authReducer, initUser);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
