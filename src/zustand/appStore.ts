import { create } from "zustand";
import { persist } from "zustand/middleware";


type Mode = "new" | "account" | "begin";

interface AppStore {
  viewMode: Mode;
  setMode: (newMode: Mode) => void;
}

const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      setMode: (mode: Mode) => set((state) => ({ viewMode: mode })),
      viewMode: "begin",
    }),
    { name: "app-store" }
  )
);

export default useAppStore;
