import { LoginAction } from "../actions/LoginAction";
import { UserState } from "../contexts/AuthContext";

const authReducer = (state: UserState, action: LoginAction): UserState => {
  switch (action.type) {
    case "SET_USER_NAME":
      return {
        ...state,
        username: action.payload,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogin: true,
        helperText: action.payload,
        isError: false,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        helperText: action.payload,
        isError: true,
      };
    case "SET_ERROR":
      return {
        ...state,
        isError: action.payload,
      };
    case "LOG_OUT":
      return action.payload;
  }
};

export default authReducer;
