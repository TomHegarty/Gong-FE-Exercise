import { Alert, Button, TextField } from "@mui/material";
import { LoginFormContainer } from "./login-page.style";
import { useState, type FormEvent } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import { routes } from "../../App";
import PageLayout from "../../components/PageLayout/PageLayout";
import { validateEmail, validatePassword } from "../../utils/validations";

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState<string | undefined>(
    "eric.lutes@luteric.co.uk"
  ); //⚠️⚠️⚠️⚠️
  const [userPassword, setUserPassword] = useState<string | undefined>(
    "Vg=@|AN4"
  ); //⚠️⚠️⚠️⚠️
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [passwordError, setPasswordError] = useState<string | undefined>(
    undefined
  );
  const [formError, setFormError] = useState<string | undefined>(undefined);
  const [formLoading, setFormLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const { handleLogin } = useAuth();

  const handleLogIn = async (event: FormEvent) => {
    event.preventDefault();
    setFormLoading(true);
    setFormError(undefined);

    const emailError = validateEmail(userEmail);
    setEmailError(emailError);

    const passwordError = validatePassword(userPassword);
    setPasswordError(passwordError);

    if (emailError || passwordError || !userEmail || !userPassword) {
      setFormLoading(false);
      return;
    }
    const loginResult = await handleLogin(userEmail, userPassword);
    setFormLoading(false);

    if (loginResult.status === "success") {
      setFormError(undefined);
      navigate(routes.hierarchy);
    } else {
      setFormError(loginResult.message);
    }
  };

  return (
    <PageLayout>
      <h1>Please Login</h1>
      <LoginFormContainer onSubmit={handleLogIn}>
        <TextField
          id="email-input"
          label="Email Address"
          autoComplete="username"
          variant="outlined"
          size="small"
          value={userEmail || ""}
          onChange={(event) => {
            setUserEmail(event.target.value);
            setEmailError(undefined);
          }}
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          id="password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          size="small"
          value={userPassword || ""}
          onChange={(event) => {
            setUserPassword(event.target.value);
            setPasswordError(undefined);
          }}
          error={!!passwordError}
          helperText={passwordError}
        />
        {formError ? <Alert severity="error">{formError}</Alert> : null}
        <Button
          variant="contained"
          type="submit"
          loading={formLoading}
          disabled={formLoading}
        >
          Login
        </Button>
      </LoginFormContainer>
    </PageLayout>
  );
};

export default LoginPage;
