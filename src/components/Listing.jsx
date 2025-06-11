import React, { useEffect } from 'react';
import { MdMapsHomeWork } from 'react-icons/md';
import { FaMoneyBillWave } from 'react-icons/fa';
import { PiBuildingApartmentLight } from 'react-icons/pi';
import { IoPerson } from 'react-icons/io5';
import { MdOutlineEventAvailable } from 'react-icons/md';
import { CgUnavailable } from 'react-icons/cg';
import { AuthContext } from '../provider/AuthProvider';
import { FaPencilAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import AOS from 'aos';
import { Link } from 'react-router';

const Listing = ({ listing, HandleDeleteListing }) => {
  // if (user == null) {
  //   return <div></div>;
  // }

  let admin = false;
  // if (listing.userEmail == user.email) {
  //   // console.log(`The title is ${listing.title} and the result is true`);
  //   admin = true;
  // } else {
  //   // console.log(`The title is ${listing.title} and the result is false`);
  // }
  useEffect(() => {
    AOS.init();
  }, []);
  const {
    _id,
    title,
    location,
    photo,
    lifestylePreferences,
    roomType,
    rentAmount,
    availability,
  } = listing;

  return (
    <div
      data-aos="fade-left"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="3000"
      className="card lg:card-side bg-base-100 shadow-sm transition-all duration-1000 ease-in-out transform "
    >
      <figure className="lg:w-[700px] lg:h-auto">
        <img className="w-full" src={photo} alt="Album" />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-3xl text-center font-bold">{title}</h2>
        <div className="divider"></div>
        <p className="flex lg:w-[700px] justify-start h-[30px] items-center font-bold text-[16px] lg:text-3xl">
          <MdMapsHomeWork className="lg:text-6xl mr-2 text-5xl" /> Location :{' '}
          {location}
        </p>
        {admin && (
          <div>
            <div className="divider text-2xl font-bold">Admin Control</div>
            <div className="flex justify-between px-14 py-2">
              <Link to={`/listings/updatelisting/${_id}`}>
                <FaPencilAlt
                  size={40}
                  className="p-1 bg-yellow-400 hover:bg-yellow-500 transition-all ease-in-out duration-1000 text-white hover:cursor-pointer "
                />
              </Link>
              <MdDelete
                size={40}
                onClick={() => HandleDeleteListing(_id)}
                className="p-1 bg-red-400 hover:bg-red-500 transition-all ease-in-out duration-1000  text-white hover:cursor-pointer "
              />
            </div>
            <div className="divider"></div>
          </div>
        )}
        <div className="divider text-xl">TAGS</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-3">
          <div className="badge badge-outline text-xl p-5 w-full">
            <FaMoneyBillWave /> Rent : {rentAmount}
          </div>
          <div className="badge badge-outline text-xl p-5 w-full">
            <PiBuildingApartmentLight /> Room Type : {roomType}
          </div>
          <div className="badge badge-outline text-base lg:text-base   p-5 w-full flex items-center">
            <IoPerson /> LifeStyle Preference : {lifestylePreferences}
          </div>
          <div className="badge badge-outline text-xl p-5 w-full">
            {availability === 'Not Available' ? (
              <div className="flex items-center gap-2">
                <CgUnavailable />
                <h1>Unavailable</h1>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <MdOutlineEventAvailable />
                <h1 className="pb-1">Available</h1>
              </div>
            )}
          </div>
        </div>
        <div className="card-actions justify-center">
          <Link
            className="btn btn-primary w-full font-bold text-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:text-white"
            to={`/listings/listingDetails/${_id}`}
          >
            <button>Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Listing;
