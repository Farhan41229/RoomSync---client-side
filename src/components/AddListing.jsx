import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddListing = () => {
  const [availability, setAvailability] = useState(false); // State to handle the checkbox

  const HandleAddListing = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const ListingData = Object.fromEntries(formData.entries());

    // Add availability value based on checkbox state
    ListingData.availability = availability ? 'Available' : 'Not Available';

    console.log(ListingData); // Now you will get the correctly structured object with availability

    // Adding the listing to the MongoDB Server
    fetch('http://localhost:3000/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ListingData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Data After adding the Listing', data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Added listing successfully',
            icon: 'success',
            draggable: true,
          });
        }
      });
  };

  // Handle the checkbox change
  const handleAvailabilityChange = () => {
    setAvailability(!availability);
  };

  return (
    <div className="py-[70px] px-[112px] bg-stone-50 space-y-8">
      <h1 className="text-[45px] text-[#374151] text-center font-normal rancho">
        Add New Listing
      </h1>
      <p className="raleway w-[900px] text-lg text-center mx-auto text-[rgba(27,26,26,0.7)]">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form
        onSubmit={HandleAddListing}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <fieldset className="fieldset">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            Title
          </legend>
          <input
            type="text"
            name="title" // Corrected name
            className="input w-full"
            placeholder="Enter Title of your Listing"
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
            defaultValue={'ayon55928@gmail.com'}
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
            defaultValue={'Farhan Tahsin Khan'}
          />
        </fieldset>
        <fieldset className="fieldset col-span-1">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            User Photo
          </legend>
          <input
            type="text"
            defaultValue={
              'https://i.ibb.co/kgd2hxd5/undraw-developer-avatar-f6ac.png'
            }
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
          />
        </fieldset>
        <input
          className="bg-[#D2B48C] text-[#331A15] col-span-2 py-[13px] text-center text-2xl rancho font-bold border-2 border-[rgb(51,26,21)]"
          type="submit"
          value="Add Listing"
        />
      </form>
    </div>
  );
};

export default AddListing;
