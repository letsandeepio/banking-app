import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AccountType = "current" | "saving";
interface Account {
  id: number;
  name: string;
  balance: number;
  type: AccountType;
}

/* Make id optional on Account input as we are generating id automatically */
type AccountKeys = Exclude<keyof Account, "id">;
type AccountInput = Pick<Account, AccountKeys>;

interface BankStore {
  accounts: Account[];
  deleteAccount?: (byId: number) => void;
  createAccount: (account: AccountInput) => number;
  deposit?: (byId: number, amount: number) => void;
  withdraw?: (byId: number, amount: number) => void;
}

const useBankStore = create<BankStore>()(
  persist(
    (set) => ({
      accounts: [],
      createAccount: (account: AccountInput) => {
        let id = 0;
        set((state) => {
          id = state.accounts.length + 1;
          return {
            accounts: [
              ...state.accounts,
              {
                id,
                balance: account.balance,
                name: account.name,
                type: account.type,
              },
            ],
          };
        });
        return id;
      },
    }),
    { name: "bank-store" }
  )
);

export default useBankStore;
