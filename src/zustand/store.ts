import { create } from "zustand";
import { persist } from "zustand/middleware";


export type AccountType = "current" | "saving"
interface Account {
  id: number;
  name: string;
  balance: number;
  type: AccountType;
}

/* Make id optional on Account input as we are generating id automatically */
type AccountKeys = Exclude<keyof Account, "id">;
type AccountInput = Pick<Account, AccountKeys>;

type Mode = "new" | "account" | "begin";

interface AppStore {
  viewMode: Mode;
  accounts: Account[];
  fish: number;
  deleteAccount?: (byId: number) => void;
  deposit?: (byId: number, amount: number) => void;
  withdraw?: (byId: number, amount: number) => void;
  setMode: (newMode: Mode) => void;
  createAccount: (account: AccountInput) => void;
}

const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      setMode: (mode: Mode) => set((state) => ({ viewMode: mode })),
      viewMode: "begin",
      fish: 0,
      accounts: [],
      createAccount: (account: AccountInput) => {
        set((state) => ({
          accounts: [
            ...state.accounts,
            {
              id: state.accounts.length + 1,
              balance: account.balance,
              name: account.name,
              type: account.type,
            },
          ],
        }));
      },
    }),
    { name: "app-store" }
  )
);

export default useAppStore;
