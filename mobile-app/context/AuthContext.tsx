import React from 'react';

interface AuthContextState {
  user: {} | null;
  login: (user: {}) => void;
  logout: () => void;
}

export const AuthContext = React.createContext({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<{} | null>({});

  const login = (user: {}) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
