import styled from "@emotion/styled";

export const TopMenuContainer = styled.form((props) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "60px",
  backgroundColor: props.theme.palette.grey[200],
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));
