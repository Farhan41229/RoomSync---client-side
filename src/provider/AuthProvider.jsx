import React, { createContext } from 'react';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const user = {
    name: 'Farhan Tahsin Khan',
  };
  const AuthData = {
    user,
  };
  return (
    <div>
      <AuthContext value={AuthData}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
