import { Button, Chip, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ThemeContext from "../contexts/ThemeContext";
import TodoContext, { TodosProps } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";
import DeleteIcon from "@mui/icons-material/Delete";
import Navbar from "./Navbar";
const TodoList = () => {
  const [inputValue, updateInputValue] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [isDisabled, setDisabled] = useState<boolean>(true);
  const { theme } = useContext(ThemeContext);
  const { dispatch } = useContext(TodoContext);
  let test = theme as
    | "secondary"
    | "inherit"
    | "primary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;

  function handleInputValue(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    updateInputValue(e.target.value);
  }

  function addNewTodo() {
    if (inputValue) {
      dispatch({ type: "ADD_TODO_ITEM", payload: { name: inputValue } });
      updateInputValue("");
    }
  }

  const removeSelectedTodo = () => {
    dispatch({ type: "REMOVE_SELECTED_ITEM", payload: selected });
    setSelected([]);
    //pull_data(selected);
  };
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          mx: "auto",

          mt: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography align="center" variant="h4" gutterBottom component="div">
          Todo List
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TextField
            sx={{ mr: 1, width: 200 }}
            value={inputValue}
            id="standard-basic"
            label="Create Your Todo Here"
            variant="outlined"
            onChange={handleInputValue}
          />
          <Button onClick={addNewTodo} color={test} variant="contained">
            <AddIcon />
          </Button>
          <Button
            disabled={isDisabled}
            sx={{ ml: 1 }}
            onClick={removeSelectedTodo}
            color={test}
            variant="contained"
          >
            <DeleteIcon />
          </Button>
        </Box>
        <TodoItem
          setSelected={setSelected}
          selected={selected}
          isDisabled={isDisabled}
          setDisabled={setDisabled}
        />
      </Box>
    </div>
  );
};

export default TodoList;
