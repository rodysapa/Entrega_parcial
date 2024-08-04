// AuthContext.js
import React, {createContext, useState, useEffect, useContext} from 'react';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import auth from '../firebase/auth';

// Cria o contexto
const AuthContext = createContext();

// Provedor do contexto
export function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Inscreve-se para as mudanças no estado de autenticação
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    // Limpeza do efeito
    return () => unsubscribe();
  }, []);

  // Função para sair
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
  };

  // Valor do contexto
  const value = {
    user,
    loading,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook para usar o contexto
export function useAuth() {
  return useContext(AuthContext);
}
