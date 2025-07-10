import { useEffect } from "react";
import { useHierarchyStore } from "../../stores/HierarchyStore";
import { useHierarchyData } from "../../hooks/useHierarchyData";
import { HierarchyTreeOuter } from "./hierarchy-tree-page.style";
import HierarchyNode from "../../components/HierarchyNode/HierarchyNode";
import { useUserStore } from "../../stores/UserStore";
import { Alert, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { routes } from "../../App";
import PageLayout from "../../components/PageLayout/PageLayout";

const HierarchyTreePage = () => {
  const hierarchyTree = useHierarchyStore((state) => state.hierarchyTree);
  const { fetchHierarchyData } = useHierarchyData();
  const currentUser = useUserStore((state) => state.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHierarchyData();
  }, []);

  return (
    <PageLayout>
      <h1>Hierarchy Tree Page</h1>

      {currentUser ? (
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
      ) : (
        <>
          <Alert severity="warning">
            {"You must be signed in to view hierarchy"}
          </Alert>
          <Button onClick={() => navigate(routes.login)}>Login</Button>
        </>
      )}
    </PageLayout>
  );
};

export default HierarchyTreePage;
