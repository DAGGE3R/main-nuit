import { create } from "zustand";
import { OrganId } from "@/types/organs"

interface StoreDrawer {
  isDrawerOpen: boolean;
  selectedOrgan: OrganId | null;
  toggleDrawer: () => void;
  setSelectedOrgan: (id: OrganId | null) => void;
}

export const useStoreDrawer = create<StoreDrawer>((set) => ({
  isDrawerOpen: false,
  selectedOrgan: null,
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
  setSelectedOrgan: (id) => set({ selectedOrgan: id }),
}));
