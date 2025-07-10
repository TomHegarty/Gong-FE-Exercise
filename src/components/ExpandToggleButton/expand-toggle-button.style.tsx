import styled from "@emotion/styled";

interface ToggleButtonContainerProps {
  inactive: boolean;
}

export const ToggleButtonContainer = styled.button<ToggleButtonContainerProps>(
  (props) => ({
    cursor: props.inactive ? "default" : "pointer",
    border: "none",
    backgroundColor: "inherit",
    borderRadius: props.theme.spacing(1),
    aspectRatio: "1 / 1",

    "&: hover": {
      backgroundColor: props.theme.palette.grey[300],
    },
  })
);

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
