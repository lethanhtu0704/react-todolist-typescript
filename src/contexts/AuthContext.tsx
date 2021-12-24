import { createContext } from "react";

export interface UserState {
  username: string;
  password: string;
  helperText: string;
  isError: boolean;
  isLogin: boolean;
}

export const initUser: UserState = {
  username: "",
  password: "",
  helperText: "",
  isError: false,
  isLogin: false,
};

export interface AuthContextModel {
  state: UserState;
  dispatch: any;
}

const AuthContext = createContext<AuthContextModel>({
  state: initUser,
  dispatch: null,
});

export default AuthContext;
