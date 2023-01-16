import React from "react";
import { LoginForm } from "../../../components/Login/Form";

export default {
  title: "Login/Form",
  component: LoginForm,
};

export const Default = () => (
  <LoginForm
    login={(email: string, password: string) =>
      console.log({ email, password })
    }
  />
);
