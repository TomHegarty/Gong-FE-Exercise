import { create } from "zustand";
import type { UserData } from "../services/RealtimeDatabaseService";

const userStoreInitialState = {
  currentUser: undefined,
};

interface UserStore {
  currentUser: UserData | undefined;
  setCurrentUser: (user: UserData | undefined) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  ...userStoreInitialState,
  setCurrentUser: (user) => set({ currentUser: user }),
}));
