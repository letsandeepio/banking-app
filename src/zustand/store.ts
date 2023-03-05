import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

interface Account {
  id: number;
  name: string;
  balance: number;
}

interface AppStore {
  accounts: Account[];
  fish: number;
  deleteAccount?: (byId: number) => void;
  deposit?: (byId: number, amount: number) => void;
  withdraw?: (byId: number, amount:number) => void;
}

const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      fish: 0,
      accounts: [],
    }),
    { name: "app-store" }
  )
);


export default useAppStore;