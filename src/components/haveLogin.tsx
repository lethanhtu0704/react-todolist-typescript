import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function HaveLogin({ children }: { children: JSX.Element }) {
  const { state } = useContext(AuthContext);
  let location = useLocation();

  console.log(state);
  if (state.isLogin) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/todo" state={{ from: location }} />;
  }

  return children;
}
