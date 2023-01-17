import dayjs, { Dayjs } from "dayjs";
import { useContext, useMemo, useReducer } from "react";
import { getToken } from "../functions/api";
import { AuthContext, AuthContextType } from "./context";

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);

  return context;
};

interface AuthContextState {
  token: string | null;
  exp: Dayjs | null;
}

export const authContextReducer = (
  _: AuthContextState,
  action: { type: "LOGIN"; token: string; exp: Dayjs } | { type: "LOGOUT" }
): AuthContextState => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("TOKEN", action.token);
      localStorage.setItem("TOKEN_EXP", action.exp.toString());
      return { token: action.token, exp: action.exp };
    case "LOGOUT":
      localStorage.removeItem("TOKEN");
      localStorage.removeItem("TOKEN_EXP");
      return { token: null, exp: null };
  }
};

export const useAuthContextReducer = (): AuthContextType => {
  const token = getToken();
  const exp = localStorage.getItem("TOKEN_EXP");
  const [state, dispatch] = useReducer(authContextReducer, {
    token,
    exp: exp != null ? dayjs(exp) : null,
  });

  return useMemo(() => ({ state, dispatch }), [state, dispatch]);
};

export const useLoginStatus = (context: AuthContextState): boolean => {
  return context.token != null && context.exp != null && context.exp.isAfter(dayjs());
};
