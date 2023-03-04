import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) setMyUser(user);
    else setMyUser(false);
  }, [isAuthenticated]);
  return (
    <userContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => useContext(userContext);
