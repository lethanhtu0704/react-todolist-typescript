export type TodoAction =
  | { type: "ADD_TODO_ITEM"; payload: { name: string } }
  | { type: "REMOVE_TODO_ITEM" | "TOGGLE_TODO_ITEM"; payload: { id: string } }
  | { type: "REMOVE_SELECTED_ITEM"; payload: string[] };
