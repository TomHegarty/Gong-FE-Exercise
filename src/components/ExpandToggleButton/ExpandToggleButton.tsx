import {
  OpenButtonContainer,
  ToggleButtonContainer,
} from "./expand-toggle-button.style";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface ExpandToggleButtonProps {
  toggleState: boolean;
  toggleSetter: (toggleState: boolean) => void;
  inactive?: boolean;
}

const ExpandToggleButton = (props: ExpandToggleButtonProps) => {
  return (
    <ToggleButtonContainer
      inactive={props.inactive || false}
      onClick={() =>
        props.inactive ? null : props.toggleSetter(!props.toggleState)
      }
    >
      {props.inactive ? (
        <RemoveIcon />
      ) : (
        <OpenButtonContainer rotate={props.toggleState}>
          <AddIcon />
        </OpenButtonContainer>
      )}
    </ToggleButtonContainer>
  );
};

export default ExpandToggleButton;
