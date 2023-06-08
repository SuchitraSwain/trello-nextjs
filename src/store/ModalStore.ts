import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closedModal: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closedModal: () => set({ isOpen: false }),
}));
