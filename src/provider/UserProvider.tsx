"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface UserContextProps {
  username: string | null;
  setUsername: (username: string) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [username, setUsernameState] = useState<string | null>(null);

  useEffect(() => {
    const savedUsername = localStorage?.getItem("username");
    if (savedUsername) {
      setUsernameState(savedUsername);
    }
  }, []);

  const setUsername = (username: string) => {
    setUsernameState(username);
    localStorage.setItem("username", username);
  };

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default UserProvider;
