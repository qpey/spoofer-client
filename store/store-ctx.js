import { useState, createContext, useContext } from "react";

const useStore = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return {
    user,
    password,
    subcsriptionEmail,
    signin: () => setUser("Ian"), // fire an http request to the signin route handler -> returns a user object
    signup: () => setUser("Ian"), // make an http request to the signup route handler -> returns a user object
  };
};

const StoreContext = createContext(null);

export const StoreContextProvider = () => {
  return (
    <StoreContext.Provider value={useStore}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const useSignin = () => useContext(StoreContext).signin;
export const useSignup = () => useContext(StoreContext).signup;
export const useUser = () => useContext(StoreContext).user;
export const usePassword = () => useContext(StoreContext).password;
