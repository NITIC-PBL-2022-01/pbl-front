import { useContext, useMemo, useReducer } from "react";
import { getToken } from "../functions/api";
import { AuthContext, AuthContextType } from "./context";

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);

  return context
};

interface AuthContextState {
  token: string | null;
}

export const authContextReducer = (
  _: AuthContextState,
  action: { type: "LOGIN", token: string } | { type: "LOGOUT" },
): AuthContextState => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("TOKEN", action.token)
      return { token: action.token };
    case "LOGOUT":
      localStorage.removeItem("TOKEN")
      return { token: null };
  }
}

export const useAuthContextReducer = (): AuthContextType => {
  const token = getToken();
  const [state, dispatch] = useReducer(authContextReducer, { token });

  return useMemo(() => ({ state, dispatch }), [state, dispatch]);
};
