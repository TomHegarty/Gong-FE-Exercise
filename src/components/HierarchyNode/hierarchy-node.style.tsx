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
    width: "100%",
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

interface UserHierarchyChildrenWrapperProps {
  expanded: boolean;
}

export const UserHierarchyChildrenWrapper =
  styled.ul<UserHierarchyChildrenWrapperProps>((props) => ({
    width: "100%",
    overflow: "hidden",
    transition: "max-height 0.5s ease",
    maxHeight: props.expanded ? 1000 : 0,
    padding: 0,
    margin: 0,
  }));
