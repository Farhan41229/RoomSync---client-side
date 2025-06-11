import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const ListingsLayout = () => {
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
