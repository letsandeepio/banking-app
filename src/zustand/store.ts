import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

interface Account {
  id: number;
  name: string;
  balance: number;
}

type Mode = "new" | "account" | "begin";

interface AppStore {
  viewMode: Mode;
  setMode: (newMode: Mode) => void;
  accounts: Account[];
  fish: number;
  deleteAccount?: (byId: number) => void;
  deposit?: (byId: number, amount: number) => void;
  withdraw?: (byId: number, amount: number) => void;
}

const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      setMode: (mode: Mode) => set((state) => ({ viewMode: mode })),
      viewMode: "begin",
      fish: 0,
      accounts: [],
    }),
    { name: "app-store" }
  )
);

export default useAppStore;
