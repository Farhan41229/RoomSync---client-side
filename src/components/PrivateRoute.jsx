import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user, UserLoading } = useContext(AuthContext);
  const location = useLocation();
  if (user && user.email) {
    return children;
  }
  if (UserLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>;
};

export default PrivateRoute;
