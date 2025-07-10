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

export const OpenButtonContainer = styled.div<OpenButtonContainerProps>(
  (props) => ({
    transform: props.rotate ? "rotate(45deg)" : "none",
    transition: "transform 0.2s ease",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);
