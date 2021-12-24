import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AppTheme from "./AppTheme/AppTheme";
import HaveLogin from "./components/haveLogin";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
import TodoList from "./components/TodoList";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ThemeContextProvider from "./contexts/ThemeContextProvider";
import TodoContextProvider from "./contexts/TodoContextProvider";
import ThemeButton from "./ThemeButton/ThemeButton";
function App() {
  return (
    <div>
      <ThemeProvider theme={AppTheme}>
        <AuthContextProvider>
          <ThemeContextProvider>
            <TodoContextProvider>
              <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route
                  path="/login"
                  element={
                    <HaveLogin>
                      <Login />
                    </HaveLogin>
                  }
                />
                <Route
                  path="/todo"
                  element={
                    <RequireAuth>
                      <TodoList />
                    </RequireAuth>
                  }
                />
              </Routes>
              <ThemeButton />
            </TodoContextProvider>
          </ThemeContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
