import React, { use, useEffect } from 'react';
import { useState } from 'react';
import Listing from './Listing';
import AOS from 'aos';
import Aos from 'aos';
const HomeListings = ({ listingsPromise }) => {
  useEffect(() => {
    Aos.init();
  });
  const listings = use(listingsPromise);
  const [toplistings, setTopListings] = useState([]);
  useEffect(() => {
    setTopListings(listings);
  }, [listings]);
  // console.log(listings);
  return (
    <div className="lg:pl-5 lg:pr-5 p-5 space-y-7 ">
      <h1
        data-aos="fade-down"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        className="text-center text-5xl font-bold"
      >
        Welcome to RoomSync
      </h1>
      <div
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
        className="divider lg:text-3xl text-xl font-bold mb-15"
      >
        Please Explore our Top Listings
      </div>
      <div className="grid grid-cols-1 gap-12">
        {toplistings.map((listing) => (
          <Listing key={listing._id} listing={listing}></Listing>
        ))}
      </div>
    </div>
  );
};

export default HomeListings;
