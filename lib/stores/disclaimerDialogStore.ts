import { create } from 'zustand';

interface DisclaimerDialogStoreState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useDisclaimerDialogStore = create<DisclaimerDialogStoreState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
