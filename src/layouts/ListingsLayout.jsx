import React, { useContext } from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const ListingsLayout = () => {
  const { UserLoading } = useContext(AuthContext);
  if (UserLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-xl"></span>
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

export default ListingsLayout;
