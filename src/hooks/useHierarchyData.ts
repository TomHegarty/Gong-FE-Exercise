import {
  fetchAllUserData,
  type UserData,
} from "../services/RealtimeDatabaseService";
import { useHierarchyStore, type UserNode } from "../stores/HierarchyStore";
import { useUserStore } from "../stores/UserStore";
import type { ServiceResponse } from "../types/ServiceResponse";

const cacheTimeout = 5 * 60 * 1000; // 5 mins

export const useHierarchyData = () => {
  const currentUser = useUserStore((state) => state.currentUser);

  const lastFetched = useHierarchyStore((state) => state.lastFetched);
  const setLastFetched = useHierarchyStore((state) => state.setLastFetched);
  const setHierarchyTree = useHierarchyStore((state) => state.setHierarchyTree);
  const hierarchyTree = useHierarchyStore((state) => state.hierarchyTree);

  const buildUserTree = (users: UserData[]) => {
    const map: Record<number, UserNode> = {};
    const roots: UserNode[] = [];

    users.forEach((user) => {
      map[user.id] = { ...user, children: [] };
    });

    users.forEach((user) => {
      if (user.managerId && map[user.managerId]) {
        map[user.managerId].children.push(map[user.id]);
      } else {
        roots.push(map[user.id]);
      }
    });

    setHierarchyTree(roots);
  };

  const fetchHierarchyData = async (
    bypassCache: boolean = false
  ): Promise<ServiceResponse> => {
    if (!currentUser?.id) {
      return {
        message: "User ID is not set. Cannot fetch hierarchy data.",
        status: "error",
      };
    }

    if (
      !bypassCache &&
      lastFetched &&
      lastFetched > Date.now() - cacheTimeout &&
      hierarchyTree &&
      hierarchyTree.length > 0
    ) {
      // If data was fetched less than 5 minutes ago, return cached data
      return {
        message: "Using CACHED hierarchy data",
        status: "success",
      };
    }

    //else actually fetch data
    const userData = await fetchAllUserData();

    if (!userData || userData.length === 0) {
      return {
        message: "No data found",
        status: "error",
      };
    }

    buildUserTree(userData);
    setLastFetched(Date.now());

    return {
      message: "Account data fetched successfully",
      status: "success",
    };
  };

  return {
    fetchHierarchyData,
  };
};
