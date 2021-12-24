import React, { useContext, useEffect, useState } from "react";
import { Checkbox, Chip, Grid, Typography } from "@mui/material";
import ThemeContext from "../contexts/ThemeContext";
import TodoContext, { TodosProps } from "../contexts/TodoContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";

interface TodoItemProps {
  //pull_data: (arg: string[]) => void,
  selected: string[];
  setSelected: (arg: string[]) => void;
  isDisabled: boolean;
  setDisabled: (arg: boolean) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  selected,
  setSelected,
  isDisabled,
  setDisabled,
}) => {
  const { theme } = useContext(ThemeContext);
  const { dispatch, state } = useContext(TodoContext);
  //const [checked, setChecked] = useState<string[]>([]);
  const count = state.todoList;
  let chipTheme = theme as
    | "secondary"
    | "primary"
    | "default"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;

  function handleDeleteTodo(id: string) {
    dispatch({ type: "REMOVE_TODO_ITEM", payload: { id } });
  }

  function handleToggleTodo(id: string) {
    dispatch({ type: "TOGGLE_TODO_ITEM", payload: { id } });
  }

  const pull_data = () => {
    if (selected.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleCheck = (id: string) => {
    let newChecked = [];
    const isChecked = selected.includes(id);
    if (isChecked) {
      newChecked = selected.filter((item) => item !== id);
    } else {
      newChecked = [...selected, id];
    }
    setSelected(newChecked);
  };

  useEffect(() => {
    pull_data();
  }, [selected]);

  return (
    <div>
      <Typography align="center" variant="h6" gutterBottom component="div">
        You have {count.length} todo item
      </Typography>
      <Grid container sx={{ textAlign: "center" }} spacing={2}>
        {state.todoList.map((todoItem: TodosProps, index: number) => (
          <Grid key={index} id={todoItem.id} item xs={12} md={12}>
            <Chip
              icon={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: red[500],
                    },
                  }}
                  id={todoItem.id}
                  icon={<DeleteIcon />}
                  checkedIcon={<DeleteIcon />}
                  onChange={handleCheck.bind(this, todoItem.id)}
                />
              }
              className={todoItem.isComplete === true ? "completed" : ""}
              sx={{ maxWidth: "100%" }}
              label={todoItem.todoName}
              color={chipTheme}
              onClick={handleToggleTodo.bind(this, todoItem.id)}
              onDelete={handleDeleteTodo.bind(this, todoItem.id)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

TodoItem.propTypes = {};

export default TodoItem;
