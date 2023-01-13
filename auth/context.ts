import { createContext } from "react";

export interface AuthContextType {
  dispatch: (action: { type: "LOGIN", token: string} | { type: "LOGOUT"}) => void,
  state: { token: string | null };
}

export const AuthContext = createContext<AuthContextType>({
  dispatch: () => {},
  state: { token: null },
});
