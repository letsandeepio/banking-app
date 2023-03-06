import { create } from "zustand";
import { persist } from "zustand/middleware";


type Mode = 'new' | 'account' | 'begin';

interface AppStore {
  currentlySelectedAccount?: string;
  viewMode: Mode;
  setMode: (newMode: Mode) => void;
  setCurrentlySelectedAccount: (newlySelectedAccount: string) => void;
}

const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      setMode: (mode: Mode) => set((state) => ({ viewMode: mode })),
      setCurrentlySelectedAccount: (newlySelectedAccount: string) =>
        set((state) => ({ currentlySelectedAccount: newlySelectedAccount })),
      viewMode: "account",
    }),
    { name: "app-store" }
  )
);

export default useAppStore;
