import styled from "@emotion/styled";

export const LoginFormContainer = styled.form((props) => ({
  boxSizing: "border-box",
  width: "500px",
  maxWidth: "90vw",
  display: "flex",
  flexDirection: "column",
  gap: props.theme.spacing(2),
  background: props.theme.palette.grey[100],
  padding: props.theme.spacing(2),
  borderRadius: props.theme.spacing(2),

  "& button": {
    marginLeft: "auto",
    width: "50%",
  },
}));
