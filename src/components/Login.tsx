import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import accordionStyle from "../AccordionStyle/AccordionStyle";
import AuthContext from "../contexts/AuthContext";
import ThemeContext from "../contexts/ThemeContext";

const Login = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const classes = accordionStyle();
  // Use Context
  const { theme } = useContext(ThemeContext);
  const { state, dispatch } = useContext(AuthContext);
  // /console.log(state);
  const buttonTheme = theme as
    | "secondary"
    | "inherit"
    | "primary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;

  const handleLogin: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (state.username === "test" && state.password === "123456789") {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: "Login Successfully",
      });
      navigate("/todo");
    } else {
      dispatch({
        type: "LOGIN_FAILED",
        payload: "Incorrect username or password",
      });
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "SET_USER_NAME",
      payload: event.target.value,
    });
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "SET_PASSWORD",
      payload: event.target.value,
    });
  };
  // submit form when press Enter
  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLDivElement> &
      React.FormEvent<HTMLFormElement>
  ) => {
    if (event.keyCode === 13 || event.which === 13) {
      handleLogin(event);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 20 }}>
      <form
        onSubmit={handleLogin}
        className={classes.container}
        noValidate
        autoComplete="off"
      >
        <Card sx={{ boxShadow: 10 }}>
          <CardHeader className={theme} title="Todo App" />
          <CardContent>
            <div>
              <TextField
                error={state.isError}
                fullWidth
                id="username"
                type="email"
                label="Username"
                placeholder="Username"
                margin="normal"
                onChange={handleUsernameChange}
                onKeyPress={handleKeyPress}
              />
              <TextField
                error={state.isError}
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                helperText={state.helperText}
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              color={buttonTheme}
              className={classes.loginBtn}
              type="submit"
            >
              Login
            </Button>
          </CardActions>
        </Card>
      </form>
    </Box>
  );
};

export default Login;
