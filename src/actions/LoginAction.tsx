import { UserState } from "../contexts/AuthContext";

export type LoginAction =
  | {
      type: "SET_USER_NAME" | "SET_PASSWORD" | "LOGIN_SUCCESS" | "LOGIN_FAILED";
      payload: string;
    }
  | { type: "SET_ERROR"; payload: boolean }
  | { type: "LOG_OUT"; payload: UserState };
