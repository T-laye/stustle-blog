import gsap from "gsap";
import { create } from "zustand";

interface NavStore {
  isNavOpen: boolean;
  openNav: () => void;
  closeNav: () => void;
  toggleNav: () => void;
}

export const useNavStore = create<NavStore>((set) => ({
  isNavOpen: false,

  openNav: () => {set({ isNavOpen: true });  gsap.fromTo(
    ".mobile",
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      duration: 1,
      x: 0,
      ease: "elastic.out(1, 0.7)",
      stagger: 0.1,
    }
  );
  },
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

interface ImageState {
  name: string;
  selectedFile: File | null;
  previewUrl: string | null;
  setName: (name: string) => void;
  setSelectedFile: (file: File | null) => void;
  setPreviewUrl: (url: string | null) => void;
  resetState: () => void;
}

export const useImageStore = create<ImageState>((set) => ({
  name: '',
  selectedFile: null,
  previewUrl: null,
  setName: (name) => set({ name }),
  setSelectedFile: (file) => {
    if (file) {
      const url = URL.createObjectURL(file);
      set({ selectedFile: file, previewUrl: url });
    } else {
      set({ selectedFile: null, previewUrl: null });
    }
  },
  setPreviewUrl: (url) => set({ previewUrl: url }),
  resetState: () => set({ name: '', selectedFile: null, previewUrl: null }),
}));