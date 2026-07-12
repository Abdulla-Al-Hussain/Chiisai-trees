import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import {
  createContext,
  useEffect,
  useState,
} from "react";

import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function login() {
    return signInWithPopup(auth, provider);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const authInfo = {
    user,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;