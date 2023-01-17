import { Dayjs } from "dayjs";
import { createContext } from "react";

export interface AuthContextType {
  dispatch: (
    action: { type: "LOGIN"; token: string; exp: Dayjs } | { type: "LOGOUT" }
  ) => void;
  state: { token: string | null; exp: Dayjs | null };
}

export const AuthContext = createContext<AuthContextType>({
  dispatch: () => {},
  state: { token: null, exp: null },
});
