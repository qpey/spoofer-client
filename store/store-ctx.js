import { useState, createContext, useContext } from "react";

const useStore = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [subcsriptionEmail, setSubscriptionEmail] = useState("");

  return {
    user,
    password,
    subcsriptionEmail,
    signin: () => setUser("Ian"), // fire an http request to the signin route handler -> returns a user object
    signout: () => setUser(""), // fire an http request to the signout route handler or delete the cookie or token from the client
    signup: () => setUser("Ian"), // make an http request to the signup route handler -> returns a user object
    resetPassword: () => setPassword(""), // another route for resetting user's password
    forwardSubscriptionEmail: () => setSubscriptionEmail(""),
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
export const useSignout = () => useContext(StoreContext).signout;
export const useResetPassword = () => useContext(StoreContext).resetPassword;
export const useSubcsriptionEmail = () =>
  useContext(StoreContext).subcsriptionEmail;
export const useForwardSubscriptionEmail = () =>
  useContext(StoreContext).forwardSubscriptionEmail;
