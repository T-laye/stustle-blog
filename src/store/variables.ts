import { create } from "zustand";

interface NavStore {
  isNavOpen: boolean;
  openNav: () => void;
  closeNav: () => void;
  toggleNav: () => void;
}

export const useNavStore = create<NavStore>((set) => ({
  isNavOpen: false,

  openNav: () => set({ isNavOpen: true }),
  closeNav: () => set({ isNavOpen: false }),

  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
}));

interface EventModalStore {
  isEventModalOpen: boolean;
  openEventModal: () => void;
  closeEventModal: () => void;
  toggleEventModal: () => void;
  isRegisterSuccess: boolean;
  openSuccess: () => void;
  closeSuccess: () => void;
}

export const useEventModalStore = create<EventModalStore>((set) => ({
  isRegisterSuccess: false,
  isEventModalOpen: false,

  openEventModal: () => set({ isEventModalOpen: true }),
  closeEventModal: () => set({ isEventModalOpen: false }),

  openSuccess: () => set({ isRegisterSuccess: true }),
  closeSuccess: () => set({ isRegisterSuccess: false }),

  toggleEventModal: () =>
    set((state) => ({ isEventModalOpen: !state.isEventModalOpen })),
}));
