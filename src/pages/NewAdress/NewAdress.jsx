import React from 'react';
import Navbar from './Navbar/Navbar';
 // Assuming you want to include the Navbar

const Address = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Address Form */}
      <div className="flex justify-center items-center flex-grow ">
        <form className="bg-gray-200 w-[400px] p-8 rounded-lgshadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Add Address</h2>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Phone Number</label>
            <input
              type="tel"
              className="w-full p-2 border rounded"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Address</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter your address"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">City</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter your city"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">State</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter your state"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-semibold">Postal Code</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter your postal code"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Save Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default Address;
