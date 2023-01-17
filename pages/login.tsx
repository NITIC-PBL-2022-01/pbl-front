import { NextPage } from "next";
import { LoginForm } from "../components/Login/Form";
import styles from "./login.module.css";

const LoginPage: NextPage = () => {
  // TODO: connect to firebase
  const login = () => {};
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <LoginForm login={login} />
      </div>
    </div>
  );
};

export default LoginPage;
