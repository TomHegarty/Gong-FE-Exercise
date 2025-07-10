import styled from "@emotion/styled";

interface UserHierarchyNodeButtonProps {
  isManager: boolean;
}

export const UserHierarchyNodeButton =
  styled.span<UserHierarchyNodeButtonProps>((props) => ({
    cursor: props.isManager ? "pointer" : "default",
  }));

interface OpenButtonContainerProps {
  rotate: boolean;
}

export const OpenButtonContainer = styled("span", {
  shouldForwardProp: (prop) => prop !== "rotate",
})<OpenButtonContainerProps>((props) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "transform 0.3s",
  transform: props.rotate ? "rotate(45deg)" : "none",
}));
