import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { TransactionMode } from "./appStore";

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
  deleteAccount: (byId: string) => void;
  createAccount: (account: AccountInput) => string;
  transact: (type: TransactionMode, byId: string, amount: number) => void;
}

const useBankStore = create<BankStore>()(
  persist(
    (set) => ({
      accounts: [],
      deleteAccount: (byId: string) => {
        set((state) => ({
          accounts: state.accounts.filter((account) => account.id !== byId),
        }));
      },
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
      transact: (type: TransactionMode, byId: string, amount: number) => {
        set((state) => {
          const accountIndex = state.accounts.findIndex(
            (account) => account.id === byId
          );
          const account = state.accounts[accountIndex];

          const newBalance =
            type === "deposit"
              ? account.balance + amount
              : account.balance - amount;

          const updatedAccounts = [
            ...state.accounts.slice(0, accountIndex),
            { ...account, balance: newBalance },
            ...state.accounts.slice(accountIndex + 1),
          ] as Account[];

          return {
            ...state,
            accounts: updatedAccounts,
          };
        });
      },
    }),
    { name: "bank-store" }
  )
);

export default useBankStore;
