import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';

const HomeLayout = () => {
  return (
    <div className='bg-stone-50'>
      <header className="">
        <Header></Header>
        <Banner></Banner>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
