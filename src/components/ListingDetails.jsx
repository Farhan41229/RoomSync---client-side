import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { FaMoneyCheck } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import { MdApartment } from 'react-icons/md';
import { FaPersonCircleQuestion } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
const ListingDetails = () => {
  const [Liked, SetLiked] = useState(false);
  const listing = useLoaderData();
  console.log(listing);
  const {
    photo,
    title,
    description,
    rentAmount,
    location,
    roomType,
    lifestylePreferences,
    userPhoto,
    userName,
    userEmail,
    contactInfo,
  } = listing;
  //   useEffect(() => {
  //     if (Array.isArray(data)) {
  //       console.log(data);
  //     }
  //   }, [data]);
  return (
    <div className="bg-stone-200 lg:px-28 lg:py-10 p-2">
      <img src={photo} alt="" />
      <div className="bg-white py-5">
        <h1 className="lg:text-6xl text-2xl text-center font-bold">{title}</h1>
        <div className="lg:flex gap-5 lg:gap-10 lg:flex-row  py-10 px-10 lg:justify-between flex flex-col">
          <aside className="left-aside w-full lg:w-1/2 ">
            <h1 className="text-2xl font-bold lg:text-start text-center">
              Description
            </h1>
            <div className="divider"></div>
            <p className="text-lg font-semibold">{description}</p>
            <h1 className="text-3xl font-bold pt-5">General Details</h1>
            <div className="divider"></div>
            <div className="rent flex gap-4 items-center mb-3 p-4 shadow-sm">
              <FaMoneyCheck className="mt-1" size={20} />
              <p className="text-xl font-semibold">Rent : {rentAmount}</p>
            </div>
            <div className="location flex gap-4 items-center mb-3 p-4 shadow-sm">
              <FaMapLocation className="mt-1" size={20} />
              <p className="text-xl font-semibold">Location : {location}</p>
            </div>
            <div className="Roomtype flex gap-4 items-center mb-3 p-4 shadow-sm">
              <MdApartment className="mt-1" size={20} />
              <p className="text-xl font-semibold">Room Type : {roomType}</p>
            </div>
            <div className="Lifestyle-preference flex gap-4 items-center mb-3 p-4 shadow-sm">
              <FaPersonCircleQuestion className="mt-1" size={22} />
              <p className="text-xl font-semibold">
                LifeStyle Preference : {lifestylePreferences}
              </p>
            </div>
          </aside>
          <div className="divider divider-horizontal"></div>
          <aside className="right-aside flex-1 shadow-2xl p-4 space-y-4 rounded-2xl">
            <h1 className="text-5xl my-10 text-center">User Details</h1>
            <div className="divider"></div>
            <div className="flex items-center justify-around">
              <div className="p-[1px] rounded-full border border-dashed">
                <img
                  className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] rounded-full"
                  src={userPhoto}
                  alt=""
                />
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold">{userName}</h2>
            </div>
            <div className="divider"></div>
            <div className="p-[14px] text-lg lg:text-2xl font-bold flex items-center gap-5">
              <MdEmail size={30} className="mt-1" />
              <p>Email : {userEmail}</p>
            </div>
            <div className="divider text-xl">Liked this post?</div>
            <p className="text-lg text-center text-gray-500">
              Give a like to reveal the Contact Details
            </p>
            <div className="divider my-2"></div>
            <div className="flex items-center justify-center gap-5 text-2xl">
              {Liked ? (
                <div className="flex items-center gap-5">
                  <FaHeart
                    onClick={() => SetLiked(!Liked)}
                    className="mt-2 text-red-600"
                    size={30}
                  />
                  <p>Listing Liked</p>
                </div>
              ) : (
                <div className="flex items-center gap-5">
                  <FaRegHeart
                    onClick={() => SetLiked(!Liked)}
                    className="mt-2"
                    size={30}
                  />
                  <p>Like this listing</p>
                </div>
              )}
            </div>
            {Liked && (
              <div className="text-xl flex gap-2 items-center">
                <FaWhatsapp className="mt-1 ml-3" size={30} />
                <p className="flex-1">{contactInfo}</p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
