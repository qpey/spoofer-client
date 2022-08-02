import create from "zustand";

const useStore = create((set) => ({
  user: "",
  sigin: () => set(() => ({ user: "Ian" })),
  signup: () => set(() => ({ user: "Ian" })),
  signout: () => set(() => ({ user: "" })),
}));

export const useSignin = () => useStore((state) => state.sigin);
export const useSignup = () => useStore((state) => state.signup);
export const useUser = () => useStore((state) => state.user);
