import { create } from "zustand";

export const useScrollStore = create((set) => ({
  scroll: 0,
}));
