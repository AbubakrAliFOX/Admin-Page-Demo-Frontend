import { createContext, useState } from "react";

const StateContext = createContext({
  currentUser: null,
  token: null,
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState({});

  const setToken = (token) => {
    _setToken(token);
  };
  return <StateContext.Provider value={{}}></StateContext.Provider>;
};
