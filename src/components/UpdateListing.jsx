import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const UpdateListing = () => {
  const [availability, setAvailability] = useState(false);
  const handleAvailabilityChange = () => {
    setAvailability(!availability);
  };
  const data = useLoaderData();
  console.log(data);
  const {
    title,
    location,
    rentAmount,
    contactInfo,
    userEmail,
    userName,
    userPhoto,
    description,
    photo,
  } = data;
  return (
    <div className="lg:py-[70px] lg:px-[112px] p-10 bg-stone-50 space-y-8">
      <h1 className="text-[45px] text-[#374151] text-center font-normal rancho">
        Update Listing
      </h1>
      <p className="raleway lg:w-[900px] text-lg text-center mx-auto text-[rgba(27,26,26,0.7)]">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <fieldset className="fieldset">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            Title
          </legend>
          <input
            type="text"
            name="title" // Corrected name
            className="input w-full"
            placeholder="Enter Title of your Listing"
            defaultValue={title}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            Location
          </legend>
          <input
            type="text"
            name="location" // Corrected name
            className="input w-full"
            placeholder="Enter Location of your Listing"
            defaultValue={location}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            Rent Amount
          </legend>
          <input
            type="number"
            name="rentAmount" // Corrected name
            className="input w-full"
            placeholder="Enter the Rent"
            defaultValue={rentAmount}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            Room Type
          </legend>
          <select
            name="roomType" // Corrected name
            className="input w-full"
          >
            <option value="single">Single</option>
            <option value="shared">Shared</option>
            <option value="studio">Studio</option>
            <option value="dormitory">Dormitory</option>
          </select>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            Lifestyle Preferences
          </legend>
          <select
            name="lifestylePreferences" // Corrected name
            className="input w-full"
          >
            <option value="pets">Pets</option>
            <option value="smoking">Smoking</option>
            <option value="nightOwl">Night Owl</option>
            <option value="earlyRiser">Early Riser</option>
            <option value="quiet">Quiet</option>
          </select>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            Contact Info
          </legend>
          <input
            type="text"
            name="contactInfo" // Corrected name
            className="input w-full"
            placeholder="Enter your contact info"
            defaultValue={contactInfo}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            Availability
          </legend>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="availability"
              className="mr-2"
              checked={availability}
              onChange={handleAvailabilityChange}
            />
            <label className="text-lg">Is the room available?</label>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            User Email
          </legend>
          <input
            type="text"
            name="userEmail" // Corrected name
            className="input w-full"
            placeholder="Enter User Email"
            value={userEmail}
            readOnly
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            User Name
          </legend>
          <input
            type="text"
            name="userName" // Corrected name
            className="input w-full"
            placeholder="Enter User Name"
            value={userName}
            readOnly
          />
        </fieldset>
        <fieldset className="fieldset col-span-1">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            User Photo
          </legend>
          <input
            type="text"
            defaultValue={userPhoto}
            name="userPhoto" // Corrected name
            className="input w-full"
            placeholder="Enter photo URL"
          />
        </fieldset>
        <fieldset className="fieldset col-span-2">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            Description
          </legend>
          <input
            type="text"
            name="description" // Corrected name
            className="input w-full"
            placeholder="Enter Description of Your listing"
            defaultValue={description}
          />
        </fieldset>

        <fieldset className="fieldset col-span-2">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            Photo
          </legend>
          <input
            type="text"
            name="photo" // Corrected name
            className="input w-full"
            placeholder="Enter photo URL"
            defaultValue={photo}
          />
        </fieldset>
        <input
          className="bg-[#D2B48C] text-[#331A15] col-span-2 py-[13px] text-center text-2xl rancho font-bold border-2 border-[rgb(51,26,21)]"
          type="submit"
          value="Update Listing"
        />
      </form>
    </div>
  );
};

export default UpdateListing;
