import React, { useContext } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { AuthContext } from '../provider/AuthProvider';
import HomeListings from '../components/HomeListings';
const listingsPromise = fetch('http://localhost:3000/listingstop6').then(
  (res) => res.json()
);
console.log(listingsPromise);
const HomeLayout = () => {
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
    <div className="bg-stone-50">
      <header className="">
        <Header></Header>
        <Banner></Banner>
      </header>
      <main>
        <HomeListings listingsPromise={listingsPromise}></HomeListings>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
