import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider
      value={useState({
        name: "",
        email: "",
      })}
    >
      {children}
    </UserContext.Provider>
  );
};

export const userData = ({ firstName, lastName, email }) => {
  const [user, setUser] = useState({ firstName, lastName, email });

  return [user, setUser];
};
