import React, { use, useEffect } from 'react';
import { useState } from 'react';
import Listing from './Listing';
import AOS from 'aos';
import Aos from 'aos';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
const HomeListings = ({ listingsPromise }) => {
  useEffect(() => {
    Aos.init();
  });
  const listings = use(listingsPromise);
  const [toplistings, setTopListings] = useState([]);
  useEffect(() => {
    setTopListings(listings);
  }, [listings]);
  const HandleDeleteListing = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete Listing from MongoDB
        fetch(`http://localhost:3000/listings/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
              const remainingListings = toplistings.filter(
                (listing) => listing._id != id
              );
              setTopListings(remainingListings);
            }
          });
      }
    });
  };

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
          <Listing
            HandleDeleteListing={HandleDeleteListing}
            key={listing._id}
            listing={listing}
          ></Listing>
        ))}
      </div>
    </div>
  );
};

export default HomeListings;
