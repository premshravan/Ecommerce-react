import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const NewUser = () => {
  return (
    <div className="flex justify-center bg-gray-500   w-screen">
      <Navbar />
      
      <div className="flex justify-center mt-14 p-8 gap-4 flex-col items-center ">
        <h1>Enter the details</h1>
        <label>
          First Name
          <input type="text" placeholder="Name" required />
        </label>
        <label htmlFor="">Second Name
          <input type="text" placeholder="name" />
        </label>
        <label htmlFor="">Email
            <input type="email" placeholder="email"/>
        </label>
        <label>Password
            <input type="password" placeholder="password" />
        </label>
      </div>
    </div>
  );
};

export default NewUser;
