import { useState } from "react";
import {
  UserHierarchyChildrenWrapper,
  UserHierarchyNodeContainer,
} from "./hierarchy-node.style";
import UserCard from "../UserCard/UserCard";
import ExpandToggleButton from "../ExpandButton/ExpandButton";
import type { UserNode } from "../../stores/HierarchyStore";

const HierarchyNode = (props: UserNode) => {
  const isManager = props.children.length > 0;
  const [expanded, setExpanded] = useState(false);

  return (
    <UserHierarchyNodeContainer>
      <div className="user-hierarchy-row">
        <ExpandToggleButton
          toggleState={expanded}
          toggleSetter={setExpanded}
          inactive={!isManager}
        />
        <UserCard
          userFirstName={props.firstName}
          userLastName={props.lastName}
          userEmail={props.email}
          userPhoto={props.photo}
        />
      </div>
      <UserHierarchyChildrenWrapper expanded={expanded && isManager}>
        {expanded &&
          isManager &&
          props.children.map((child: UserNode) => (
            <HierarchyNode key={child.id} {...child} />
          ))}
      </UserHierarchyChildrenWrapper>
    </UserHierarchyNodeContainer>
  );
};

export default HierarchyNode;
