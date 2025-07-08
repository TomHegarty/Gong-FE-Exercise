import styled from "@emotion/styled";

export const UserCardContainer = styled.div((props) => ({
  backgroundColor: props.theme.palette.grey[300],
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: props.theme.spacing(1),
  borderRadius: props.theme.spacing(1),
  padding: props.theme.spacing(1),
  maxWidth: "300px",
  overflow: "clip",
  cursor: "pointer",
  transition: "background-color 0.3s ease-in-out",

  "& .user-info": {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.1,
  },

  "&: hover": {
    backgroundColor: props.theme.palette.grey[400],
  },
}));
