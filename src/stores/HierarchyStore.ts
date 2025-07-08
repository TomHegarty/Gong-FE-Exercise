import { create } from "zustand";
import type { UserData } from "../services/RealtimeDatabaseService";

const hierarchyStoreInitialState = {
  lastFetched: 0,
  hierarchyTree: undefined,
};

interface HierarchyStore {
  lastFetched: number;
  setLastFetched: (timestamp: number) => void;
  hierarchyTree: UserData[] | undefined;
  setHierarchyTree: (tree: UserData[] | undefined) => void;
}

export const useHierarchyStore = create<HierarchyStore>((set) => ({
  ...hierarchyStoreInitialState,
  setLastFetched: (timestamp) => set({ lastFetched: timestamp }),
  setHierarchyTree: (tree) => set({ hierarchyTree: tree }),
}));
