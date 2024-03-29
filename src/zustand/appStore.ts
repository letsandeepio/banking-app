import { create } from "zustand";
import { persist } from "zustand/middleware";


type Mode = 'new' | 'account';
export type TransactionMode = 'withdraw' | 'deposit';

interface AppStore {
  currentlySelectedAccount?: string;
  viewMode: Mode;
  transactionMode?: TransactionMode;
  searchTerm: string;
  setSearchTerm:(term: string) => void;  
  setMode: (newMode: Mode) => void;
  setTransactionMode: (newMode: TransactionMode) => void;
  setCurrentlySelectedAccount: (newlySelectedAccount?: string) => void;
}

const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      setMode: (newMode: Mode) => set((state) => ({ viewMode: newMode })),
      setSearchTerm: (term: string) => set((state) => ({ searchTerm: term })),
      setTransactionMode: (newMode: TransactionMode) =>
        set((state) => ({ transactionMode: newMode })),
      setCurrentlySelectedAccount: (newlySelectedAccount?: string) =>
        set((state) => ({ currentlySelectedAccount: newlySelectedAccount })),
      viewMode: "account",
      searchTerm: "",
    }),
    { name: "app-store" }
  )
);

export default useAppStore;
