import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../api/appwrite";
import { ID } from "appwrite";
import Spinner from "../components/Spinner";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(false); 
  const [user, setUser] = useState(null); 
  const [error, setError] = useState(null);

  const clearError = () => setError(null);

  const loginUser = async (userInfo) => {
    setLoading(true);
    clearError(); 
    try {
      await account.createEmailPasswordSession(userInfo.email, userInfo.password);
      const accountDetails = await account.get();
      setUser(accountDetails);
    } catch (err) {
      console.error("Login error:", err);
     
      setError(
       "Login Failed"
      );
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    try {
      setLoading(true);
      await account.deleteSession('current');
      setUser(null);
    } catch (err) {
      
      console.error("Logout error:", err);
      setError("Failed to log out. Please try again.");
    }
    finally{
      setLoading(false);
    }
  };

  const registerUser = async ({ username, email, password }) => {
    setLoading(true);
    clearError();
    try {
      await account.create(ID.unique(), email, password, username); 
      await account.createEmailPasswordSession(email, password);
      const accountDetails = await account.get();
      setUser(accountDetails);
    } catch (err) {
      console.error("Registration error:", err);
      setError(
        err?.type === "user_already_exists" 
          ? "Email already registered." 
          : "Registration failed. Please try again."
      );
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const checkUserStatus = async () => {
    setInitialLoading(true); 
    try {
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
    setLoading,
    loading,
    setError,
    loginUser,
    logoutUser,
    registerUser,
    clearError, 
  };

  return (
    <AuthContext.Provider value={contextData}>
      {initialLoading ? <Spinner /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export { AuthContext };