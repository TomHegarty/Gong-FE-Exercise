import styled from "@emotion/styled";

export const TopMenuContainer = styled.form((props) => ({
  boxSizing: "border-box",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  backgroundColor: props.theme.palette.grey[200],
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  gap: props.theme.spacing(1),
  padding: props.theme.spacing(1),
  zIndex: 100,
}));

export const ImageContainer = styled.span((props) => ({
  display: "flex",
  alignItems: "center",
  gap: props.theme.spacing(1),

  "& img": {
    height: 24,
    width: 24,
  },
}));
