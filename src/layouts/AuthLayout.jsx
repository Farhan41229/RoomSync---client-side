import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  const { UserLoading } = useContext(AuthContext);
  if (UserLoading) {
    return (
      <div className="flex flex-col justify-center items-center gap-10 w-full min-h-screen">
        <h1 className="text-4xl font-bold">Users are loading...</h1>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default AuthLayout;
