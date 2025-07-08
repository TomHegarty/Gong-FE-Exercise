import styled from "@emotion/styled";

export const UserHierarchyNodeContainer = styled.li((props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: props.theme.spacing(1),
  backgroundColor: props.theme.palette.grey[200],
  borderRadius: props.theme.spacing(1),
  width: "600px",
  maxWidth: "100%",

  "& .user-hierarchy-row": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: props.theme.spacing(1),

    "& span": {
      display: "flex",
      alignItems: "center",
    },
  },

  "& .user-hierarchy-children-container": {
    width: "100%",
  },
}));

interface UserHierarchyNodeButtonProps {
  isManager: boolean;
}

export const UserHierarchyNodeButton =
  styled.span<UserHierarchyNodeButtonProps>((props) => ({
    cursor: props.isManager ? "pointer" : "default",
  }));
