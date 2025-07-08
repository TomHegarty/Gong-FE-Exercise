import styled from "@emotion/styled";

export const TopMenuContainer = styled.form((props) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  backgroundColor: props.theme.palette.grey[200],
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  gap: props.theme.spacing(1),
  padding: props.theme.spacing(1),
  zIndex: 100,
}));
