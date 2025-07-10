import { create } from "zustand";
import type { UserData } from "../services/RealtimeDatabaseService";

export interface UserNode extends UserData {
  children: UserNode[];
}

const hierarchyStoreInitialState = {
  lastFetched: 0,
  hierarchyTree: undefined,
};

interface HierarchyStore {
  lastFetched: number;
  setLastFetched: (timestamp: number) => void;
  hierarchyTree: UserNode[] | undefined;
  setHierarchyTree: (tree: UserNode[] | undefined) => void;
}

export const useHierarchyStore = create<HierarchyStore>((set) => ({
  ...hierarchyStoreInitialState,
  setLastFetched: (timestamp) => set({ lastFetched: timestamp }),
  setHierarchyTree: (tree) => set({ hierarchyTree: tree }),
}));
