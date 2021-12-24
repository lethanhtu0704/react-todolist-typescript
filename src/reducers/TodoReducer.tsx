import { TodoAction } from "../actions/TodoAction";
import { TodosProps, TodoState } from "../contexts/TodoContext";
const { v4: uuidv4 } = require("uuid");
const newTodo = (todoName: string): TodosProps => {
  return { id: uuidv4(), todoName: todoName, isComplete: false };
};
const todoReducer = (todos: TodoState, action: TodoAction) => {
  switch (action.type) {
    case "ADD_TODO_ITEM":
      return {
        ...todos,
        todoList: [...todos.todoList, newTodo(action.payload.name)],
      };
    case "TOGGLE_TODO_ITEM":
      const updatedTodoList = todos.todoList.map((todoItem) =>
        todoItem.id === action.payload.id
          ? { ...todoItem, isComplete: !todoItem.isComplete }
          : todoItem
      );

      return { todoList: updatedTodoList };
    case "REMOVE_TODO_ITEM":
      return {
        todoList: todos.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    case "REMOVE_SELECTED_ITEM":
      let test = action.payload;
      return {
        todoList: todos.todoList.filter((todo) => !test.includes(todo.id)),
      };

    default:
      return todos;
  }
};

export default todoReducer;
