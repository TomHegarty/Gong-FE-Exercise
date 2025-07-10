import { useEffect } from "react";
import TopMenu from "../../components/TopMenu/TopMenu";
import { useHierarchyStore } from "../../stores/HierarchyStore";
import { useHierarchyData } from "../../hooks/useHierarchyData";
import { HierarchyTreeOuter } from "./hierarchy-tree-page.style";
import HierarchyNode from "../../components/HierarchyNode/HierarchyNode";
import { useUserStore } from "../../stores/UserStore";
import { Alert, Button } from "@mui/material";
import { useNavigate } from "react-router";

const HierarchyTreePage = () => {
  const hierarchyTree = useHierarchyStore((state) => state.hierarchyTree);
  const { fetchHierarchyData } = useHierarchyData();
  const userId = useUserStore((state) => state.userId);
  let navigate = useNavigate();

  useEffect(() => {
    fetchHierarchyData();
  }, []);

  return (
    <>
      <TopMenu />
      <h1>Hierarchy Tree Page</h1>

      {!userId ? (
        <>
          <Alert severity="warning">
            {"You must be signed in to view hierarchy"}
          </Alert>
          <Button onClick={() => navigate("/login")}>Login</Button>
        </>
      ) : (
        <>
          {hierarchyTree ? (
            <HierarchyTreeOuter>
              {hierarchyTree.map((rootUser) => (
                <HierarchyNode key={rootUser.id} {...rootUser} />
              ))}
            </HierarchyTreeOuter>
          ) : (
            <p>Loading hierarchy tree...</p>
          )}
        </>
      )}
    </>
  );
};

export default HierarchyTreePage;
