import React, { useEffect } from 'react';
import { MdMapsHomeWork } from 'react-icons/md';
import { FaMoneyBillWave } from 'react-icons/fa';
import { PiBuildingApartmentLight } from 'react-icons/pi';
import { IoPerson } from 'react-icons/io5';
import { MdOutlineEventAvailable } from 'react-icons/md';
import { CgUnavailable } from 'react-icons/cg';
import { AuthContext } from '../provider/AuthProvider';
import AOS from 'aos';

const Listing = ({ listing }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  // const { user } = useContext(AuthContext);
  // console.log(user.email);
  // console.log(listing.userEmail);
  const {
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
      className="card lg:card-side bg-base-100 shadow-sm transition-all duration-1000 ease-in-out transform hover:scale-105"
    >
      <figure className="lg:w-[700px] lg:h-auto">
        <img src={photo} alt="Album" />
      </figure>

      <div className="card-body space-y-5">
        <h2 className="card-title text-3xl text-center font-bold">{title}</h2>
        <p className="flex justify-start h-[30px] items-center font-bold text-[16px] lg:text-3xl">
          <MdMapsHomeWork className="lg:text-5xl mr-2 text-5xl" /> Location :{' '}
          {location}
        </p>
        <div className="divider text-xl">TAGS</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-3">
          <div className="badge badge-outline text-xl p-5 w-full">
            <FaMoneyBillWave /> Rent : {rentAmount}
          </div>
          <div className="badge badge-outline text-xl p-5 w-full">
            <PiBuildingApartmentLight /> Room Type : {roomType}
          </div>
          <div className="badge badge-outline text-base lg:text-lg p-5 w-full flex items-center">
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
          <button className="btn btn-primary w-full font-bold text-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:text-white">
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Listing;
