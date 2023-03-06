import { create } from "zustand";
import { persist } from "zustand/middleware";


type Mode = "new" | "account" | "begin";

interface AppStore {
  currentlySelectedAccount?: number;
  viewMode: Mode;
  setMode: (newMode: Mode) => void;
  setCurrentlySelectedAccount: (newlySelectedAccount: number) => void;
}

const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      setMode: (mode: Mode) => set((state) => ({ viewMode: mode })),
      setCurrentlySelectedAccount: (newlySelectedAccount: number) =>
        set((state) => ({ currentlySelectedAccount: newlySelectedAccount })),
      viewMode: "begin",
    }),
    { name: "app-store" }
  )
);

export default useAppStore;
