import { createContext } from "react";

export interface TodosProps {
  id: string;
  todoName: string;
  isComplete: boolean;
}
export type TodoState = {
  todoList: Array<TodosProps>;
};

export interface TodoContextModel {
  state: TodoState;
  dispatch: any;
}

export const initialState: TodoState = {
  todoList: [],
};

const TodoContext = createContext<TodoContextModel>({
  state: initialState,
  dispatch: null,
});

export default TodoContext;
