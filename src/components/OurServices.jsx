import React from 'react';
import {
  FaSearch,
  FaUserPlus,
  FaRegHandshake,
  FaHome,
  FaMapMarkerAlt,
  FaCogs,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaSearch />,
    heading: 'Browse Listings',
    text: 'Explore available roommate listings in NYC and find the perfect match based on your preferences and budget. Save time and find your ideal living partner quickly.',
  },
  {
    icon: <FaUserPlus />,
    heading: 'Post Your Listing',
    text: 'Easily post your own roommate listing with just a few clicks. Whether you are looking to share your apartment or find a place, it is simple to get started.',
  },
  {
    icon: <FaRegHandshake />,
    heading: 'Secure Connections',
    text: 'Connect with potential roommates in a secure environment. We ensure that communication between users is safe and private, allowing you to make informed decisions.',
  },
  {
    icon: <FaHome />,
    heading: 'Affordable Living',
    text: 'Roommate Finder is designed to help students and fresh graduates in NYC find affordable living options. Save money by sharing rent with someone who matches your lifestyle and preferences.',
  },
  {
    icon: <FaMapMarkerAlt />,
    heading: 'Location-Based Search',
    text: 'Search for roommates and listings in your preferred area of NYC. Whether you need to be close to your university or workplace, find a place near your daily destinations.',
  },
  {
    icon: <FaCogs />,
    heading: 'Customizable Filters',
    text: 'Tailor your search experience with customizable filters. Whether it’s a specific neighborhood, budget, or roommate preferences, find the perfect match with ease.',
  },
];

const OurServices = () => {
  return (
    <div className="text-center space-y-8 my-5">
      <h1 className="text-blue-600 text-3xl">Our Services</h1>
      <h1 className="text-6xl font-bold">What we Do</h1>
      <div className="divider w-1/7 mx-auto divider-primary"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 py-20">
        <div className="w-full bg-white shadow-xl col-span-1 p-8 space-y-5">
          <FaSearch
            className="p-3 rounded-full bg-gray-50 hover:bg-blue-400 hover:text-white transition-all ease-in-out duration-300"
            size={60}
          />
          <h1 className="text-start text-3xl font-bold">
            {services[0].heading}
          </h1>
          <p className="text-start">{services[0].text}</p>
        </div>
        <div className="w-full bg-white shadow-xl col-span-1 p-8 space-y-5">
          <FaUserPlus
            className="p-3 rounded-full bg-gray-50 hover:bg-blue-400 hover:text-white transition-all ease-in-out duration-300"
            size={60}
          />
          <h1 className="text-start text-3xl font-bold">
            {services[1].heading}
          </h1>
          <p className="text-start">{services[1].text}</p>
        </div>
        <div className="w-full bg-white shadow-xl col-span-1 p-8 space-y-5">
          <FaRegHandshake
            className="p-3 rounded-full bg-gray-50 hover:bg-blue-400 hover:text-white transition-all ease-in-out duration-300"
            size={60}
          />
          <h1 className="text-start text-3xl font-bold">
            {services[2].heading}
          </h1>
          <p className="text-start">{services[2].text}</p>
        </div>
        <div className="w-full bg-white shadow-xl col-span-1 p-8 space-y-5">
          <FaHome
            className="p-3 rounded-full bg-gray-50 hover:bg-blue-400 hover:text-white transition-all ease-in-out duration-300"
            size={60}
          />
          <h1 className="text-start text-3xl font-bold">
            {services[3].heading}
          </h1>
          <p className="text-start">{services[3].text}</p>
        </div>
        <div className="w-full bg-white shadow-xl col-span-1 p-8 space-y-5">
          <FaMapMarkerAlt
            className="p-3 rounded-full bg-gray-50 hover:bg-blue-400 hover:text-white transition-all ease-in-out duration-300"
            size={60}
          />
          <h1 className="text-start text-3xl font-bold">
            {services[4].heading}
          </h1>
          <p className="text-start">{services[4].text}</p>
        </div>
        <div className="w-full bg-white shadow-xl col-span-1 p-8 space-y-5">
          <FaCogs
            className="p-3 rounded-full bg-gray-50 hover:bg-blue-400 hover:text-white transition-all ease-in-out duration-300"
            size={60}
          />
          <h1 className="text-start text-3xl font-bold">
            {services[5].heading}
          </h1>
          <p className="text-start">{services[5].text}</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
