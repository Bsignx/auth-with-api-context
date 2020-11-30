import React, { createContext } from "react";

import useAuth from "./hooks/useAuth";

const Context = createContext();

const AuthProvider = ({ children }) => {
  const { authenticated, handleLogin, handleLogout, loading } = useAuth();

  return (
    <Context.Provider
      value={{ authenticated, handleLogin, loading, handleLogout }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, AuthProvider };
