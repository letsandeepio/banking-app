import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";


export type AccountType = "current" | "saving";
interface Account {
  id: string;
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
  createAccount: (account: AccountInput) => string;
  deposit?: (byId: number, amount: number) => void;
  withdraw?: (byId: number, amount: number) => void;
}

const useBankStore = create<BankStore>()(
  persist(
    (set) => ({
      accounts: [],
      createAccount: (account: AccountInput) => {
        let id = uuidv4();
        set((state) => {
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
