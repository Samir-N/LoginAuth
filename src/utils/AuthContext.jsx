import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../api/appwrite";
import { ID } from "appwrite";
import Spinner from "../components/Spinner";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(null);
  const [user, setUser] = useState();
  const [error, setError] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.createEmailPasswordSession(userInfo.email, userInfo.password);
      let accountDetails = await account.get();
      setUser(accountDetails);
      console.log(accountDetails);
    } catch (err) {
      console.log("ERROR is " + err);
      setError("Account not found ! Please register first");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    account.deleteSession('current');
    setUser(null);
  };

  const registerUser = async ({ username, email, password }) => {
    setLoading(true);
    try {
      let response = account.create(ID.unique(), email, password, username);
      let response1 = await account.createEmailPasswordSession(email, password);
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (err) {
      console.log
      setError(err?.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const checkUserStatus = async () => {
    setInitialLoading(true); 
    try {
      setInitialLoading(true);
      const accountDetails = await account.get();
      setUser(accountDetails);

    } catch (error) {
      console.log("User not logged in or session expired");
      setUser(null);
    } finally {
      setInitialLoading(false); 
    }
  };

  useEffect(() => {
    checkUserStatus();
  }, []);

  const contextData = {
    user,
    error,
    loading,
    setError,
    loginUser,
    setLoading,
    logoutUser,
    registerUser,
    checkUserStatus,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading||initialLoading ? <Spinner/> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => { return useContext(AuthContext) };
export { AuthContext };