import { create } from "zustand";

type IFormDataStore = {
  name: string | null;
  email: string | null;
  requirement: string | null;
  error: string | null;
  setField: (
    field: "name" | "email" | "requirement" | "error",
    value: string | boolean | null,
  ) => void;
  setFieldEmpty: () => void;
};

export const useFormDataStore = create<IFormDataStore>((set) => ({
  name: null,
  email: null,
  requirement: null,
  error: null,
  setField: (field, value) => set({ [field]: value, error: null }),
  setFieldEmpty: () => set({ name: null, email: null, requirement: null }),
}));
