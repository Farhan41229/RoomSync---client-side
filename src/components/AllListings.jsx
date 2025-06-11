import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Listing from './Listing';
import { AuthContext } from '../provider/AuthProvider';

const AllListings = () => {
  const [listings, setListings] = useState([]);

  const data = useLoaderData();
  //   console.log(data);
  useEffect(() => {
    setListings(data);
  }, [data]);

  return (
    <div className="px-10 py-10 bg-stone-50 min-h-screen">
      <div className="divider mb-10 text-xl font-bold lg:text-3xl">
        Explore Our listings-({listings.length})
      </div>
      <div className="grid grid-cols-1  gap-10">
        {listings.map((listing) => (
          <Listing key={listing._id} listing={listing}></Listing>
        ))}
      </div>
    </div>
  );
};

export default AllListings;
