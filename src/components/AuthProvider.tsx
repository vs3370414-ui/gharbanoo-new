import React, { createContext, useContext } from 'react';
import { User } from 'firebase/auth';

interface AuthContextType {
  user: User | null;
  userData: any | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  requireAuth: (action: () => void) => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userData: null,
  loading: false,
  signInWithGoogle: async () => {},
  logout: async () => {},
  requireAuth: () => {},
  openAuthModal: () => {},
  closeAuthModal: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const requireAuth = (action: () => void) => {
    action();
  };

  const signInWithGoogle = async () => {};
  const logout = async () => {};
  const openAuthModal = () => {};
  const closeAuthModal = () => {};

  return (
    <AuthContext.Provider value={{ 
      user: null, 
      userData: null, 
      loading: false, 
      signInWithGoogle, 
      logout, 
      requireAuth, 
      openAuthModal, 
      closeAuthModal 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
