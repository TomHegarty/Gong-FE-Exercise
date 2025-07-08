import { Button, TextField } from "@mui/material";
import { LoginFormContainer } from "./login-page.style";
import { useState, type FormEvent } from "react";
import { encode } from "../../utils/encode";
import { useUserStore } from "../../stores/UserStore";
import { useHandleAuth } from "../../hooks/useHandleAuth";
import TopMenu from "../../components/TopMenu/TopMenu";

const validateEmail = (email: string | undefined) => {
  if (!email) return "Email is required";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Enter a valid email address";

  return null;
};

const validatePassword = (password: string | undefined) => {
  if (!password) return "Password is required";

  if (password.length < 6) return "Password must be at least 6 characters";
  return null;
};

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);
  const [userPassword, setUserPassword] = useState<string | undefined>(
    undefined
  );
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const { handleLogin } = useHandleAuth();

  const handleLogIn = async (event: FormEvent) => {
    event.preventDefault();

    setEmailError(() => validateEmail(userEmail));
    setPasswordError(() => validatePassword(userPassword));

    if (emailError || passwordError) return;
    if (!userEmail || !userPassword) return;

    const loginReturn = await handleLogin(userEmail, userPassword);

    console.log("Login return:", loginReturn);

    if (loginReturn.status === "success") {
      console.log("pass");
    } else {
      console.warn("fail");
    }
  };

  return (
    <>
      <TopMenu />
      <h1>Please Login</h1>
      <LoginFormContainer onSubmit={handleLogIn}>
        <TextField
          id="email-input"
          label="Email Address"
          variant="outlined"
          size="small"
          value={userEmail || ""}
          onChange={(event) => {
            setUserEmail(event.target.value);
            setEmailError(null);
          }}
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          id="password-input"
          label="Password"
          type="password"
          variant="outlined"
          size="small"
          value={userPassword || ""}
          onChange={(event) => {
            setUserPassword(event.target.value);
            setPasswordError(null);
          }}
          error={!!passwordError}
          helperText={passwordError}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </LoginFormContainer>
    </>
  );
};

export default LoginPage;
