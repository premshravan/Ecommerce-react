import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AddressCard from "../../components/AddressCard/AddressCard";

const Address = () => {
  return (
    <div>
      <Navbar />
      <main className="flex justify-center items-center"></main>
      <AddressCard />
    </div>
  );
};

export default Address;
