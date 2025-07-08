import { create } from "zustand";

const userStoreInitialState = {
  userSecret: undefined,
  userEmail: undefined,
  userFirstName: undefined,
  userLastName: undefined,
  userPhoto: undefined,
  userId: undefined,
};

interface UserStore {
  userSecret: string | undefined;
  setUserSecret: (secret: string | undefined) => void;
  userEmail: string | undefined;
  setUserEmail: (email: string | undefined) => void;
  userFirstName: string | undefined;
  setUserFirstName: (firstName: string | undefined) => void;
  userLastName: string | undefined;
  setUserLastName: (lastName: string | undefined) => void;
  userPhoto: string | undefined;
  setUserPhoto: (photo: string | undefined) => void;
  userId: number | undefined;
  setUserId: (id: number | undefined) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  ...userStoreInitialState,
  setUserSecret: (secret) => set({ userSecret: secret }),
  setUserEmail: (email) => set({ userEmail: email }),
  setUserFirstName: (firstName) => set({ userFirstName: firstName }),
  setUserLastName: (lastName) => set({ userLastName: lastName }),
  setUserPhoto: (photo) => set({ userPhoto: photo }),
  setUserId: (id) => set({ userId: id }),
}));
