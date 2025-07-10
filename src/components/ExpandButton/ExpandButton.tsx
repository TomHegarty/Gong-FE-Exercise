import {
  OpenButtonContainer,
  UserHierarchyNodeButton,
} from "./expand-toggle-button.style";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface ExpandButtonProps {
  toggleState: boolean;
  toggleSetter: (toggleState: boolean) => void;
  inactive?: boolean;
}

const ExpandToggleButton = (props: ExpandButtonProps) => {
  return (
    <UserHierarchyNodeButton
      isManager={!props.inactive || true}
      onClick={() => !props.inactive && props.toggleSetter(!props.toggleState)}
    >
      {!props.inactive ? (
        <OpenButtonContainer rotate={props.toggleState}>
          <AddIcon />
        </OpenButtonContainer>
      ) : (
        <RemoveIcon />
      )}
    </UserHierarchyNodeButton>
  );
};

export default ExpandToggleButton;
