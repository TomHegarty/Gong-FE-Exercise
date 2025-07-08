import { useState } from "react";
import type { UserData } from "../../services/RealtimeDatabaseService";
import UserHierarchyRow from "../UserHierarchyRow/UserInfoRow";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  UserHierarchyNodeButton,
  UserHierarchyNodeContainer,
} from "./hierarchy-node.style";

export interface UserNode extends UserData {
  children: UserNode[];
}

interface HierarchyNodeProps {
  user: UserNode;
}

const HierarchyNode = (props: HierarchyNodeProps) => {
  const isManager = props.user.children.length > 0;
  const [expanded, setExpanded] = useState(false);

  return (
    <UserHierarchyNodeContainer>
      <div className="user-hierarchy-row">
        <UserHierarchyNodeButton
          isManager={isManager}
          onClick={() => isManager && setExpanded(!expanded)}
        >
          {isManager ? (
            expanded ? (
              <div
                style={{
                  transform: "rotate(45deg)",
                }}
              >
                <AddIcon />
              </div>
            ) : (
              <AddIcon />
            )
          ) : (
            <RemoveIcon />
          )}
        </UserHierarchyNodeButton>

        <UserHierarchyRow userData={props.user} />
      </div>
      {expanded && isManager && (
        <ul className="user-hierarchy-children-container">
          {props.user.children.map((child: UserNode) => (
            <HierarchyNode key={child.id} user={child} />
          ))}
        </ul>
      )}
    </UserHierarchyNodeContainer>
  );
};

export default HierarchyNode;
