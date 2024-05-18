import { createContext, useEffect, useState, useContext } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "@/firebaseConfig";
import { doc, getDoc, addDoc, setDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
        updateUserData(user.uid);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });
    return unsub;
  }, []);

  const updateUserData = async (userId) => {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let data = docSnap.data();
      setUser({ ...user, username: data.username, userId: data.userId });
    }
  };

  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return {
        success: true,
      };
    } catch (error) {
      let msg = error.message;
      if (msg.includes("auth/invalid-email"))
        msg = "L'adresse email est invalide";
      if (msg.includes("auth/invalid-credential"))
        msg = "Les informations d'identification ne sont pas valides";
      return {
        success: false,
        msg,
      };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        msg: error.message,
        error,
      };
    }
  };

  const register = async (email, password, username) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", response?.user.uid), {
        username,
        userId: response?.user.uid,
      });
      return {
        success: true,
        data: response?.user,
      };
    } catch (error) {
      let msg = error.message;
      if (msg.includes("auth/invalid-email"))
        msg = "L'adresse email est invalide";
      if (msg.includes("auth/weak-password"))
        msg = "Le mot de passe doit contenir au moins 6 caractères";
      if (msg.includes("auth/email-already-in-use"))
        msg = "L'adresse email est déjà utilisée";

      return {
        success: false,
        msg,
      };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuth must be wrapped inside AuthContextProvider");
  }
  return value;
};
