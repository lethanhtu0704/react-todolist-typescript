import React, { ReactNode, useReducer } from "react";
import todoReducer from "../reducers/TodoReducer";
import TodoContext, { initialState } from "./TodoContext";
interface TodoContextProps {
  children: ReactNode;
}

const TodoContextProvider = ({ children }: TodoContextProps) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
