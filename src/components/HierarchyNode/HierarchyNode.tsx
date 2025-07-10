import { useState } from "react";
import {
  HierarchyChildrenWrapper,
  HierarchyNodeContainer,
} from "./hierarchy-node.style";
import UserCard from "../UserCard/UserCard";
import ExpandToggleButton from "../ExpandToggleButton/ExpandToggleButton";
import type { UserNode } from "../../stores/HierarchyStore";

const HierarchyNode = (props: UserNode) => {
  const isManager = props.children.length > 0;
  const [expanded, setExpanded] = useState(false);

  return (
    <HierarchyNodeContainer>
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
      <HierarchyChildrenWrapper expanded={expanded && isManager}>
        {expanded &&
          isManager &&
          props.children.map((child: UserNode) => (
            <HierarchyNode key={child.id} {...child} />
          ))}
      </HierarchyChildrenWrapper>
    </HierarchyNodeContainer>
  );
};

export default HierarchyNode;
