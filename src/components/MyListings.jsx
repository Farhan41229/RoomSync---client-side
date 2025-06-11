import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Listing from './Listing';

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [mylistings, setMylistings] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    if (Array.isArray(data)) {
      const filteredlist = data.filter((list) => list.userEmail == user.email);
      setMylistings(filteredlist);
    }
  }, [data]);
  return (
    <div>
      <h1 className="lg:px-10 px-5 bg-stone-50 py-10 text-6xl font-bold text-center">
        This is My Listings
      </h1>
      <div className='grid grid-cols-1 gap-12 px-10'>
        {mylistings.map((listing) => (
          <Listing key={listing._id} listing={listing}></Listing>
        ))}
      </div>
    </div>
  );
};

export default MyListings;
