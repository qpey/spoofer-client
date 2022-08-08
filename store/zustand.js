import axios from "axios";
import create from "zustand";

const useStore = create((set) => ({
  user: "",
  sigin: (email, password) => set(() => doSigin(email, password)),
  signup: (firstName, lastName, email, password) =>
    set(() => ({ user: "Ian" })),
}));

export const useSignin = () => useStore((state) => state.sigin);
export const useSignup = () => useStore((state) => state.signup);
export const useUser = () => useStore((state) => state.user);

const doSigin = async (email, password) => {
  const response = await axios.post(
    "https://spoofy-server.herokuapp.com/api/auth/signin",
    {
      email,
      password,
    }
  );

  const {
    data: { data },
  } = response;
  console.log(data);

  if (!localStorage.getItem("user")) {
    localStorage.setItem("user", data);
  }

  return data;
};

const doSigup = async (firstName, lastName, email, password) => {
  try {
    const response = await axios.post(
      "https://spoofy-server.herokuapp.com/api/auth/signup",
      {
        firstName,
        lastName,
        email,
        password,
      }
    );

    const {
      data: { data },
    } = response;
    console.log(data);

    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", data);
    }
  } catch (error) {
    console.error(error.data);
  }

  return data;
};
