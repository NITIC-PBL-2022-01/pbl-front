import React from "react";
import { SignUpForm } from "../../../components/SignUp/Form";

export default {
  title: "Signup/Form",
  component: SignUpForm,
};

export const Default = () => (
  <SignUpForm
    signup={(email: string, password: string) =>
      console.log({ email, password })
    }
  />
);
