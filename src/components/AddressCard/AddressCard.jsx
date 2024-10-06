import React, { useState } from "react";
import { useCart } from "../../Context/cart-context";

const AddressCard = () => {
  const [addresses] = useState([
    {
      id: 1,
      name: "abc",
      phone: 6543546656,
      address: "asdfsdfsadf",
      city: "asfsadf",
      state: "asfsdfsdf",
      pin: 4567456,
    },
    {
      id: 2,
      name: "abcad",
      phone: 6546653556,
      address: "asdfsdfsadf",
      city: "asfsadf",
      state: "asfsdfsdf",
      pin: 4567456,
    },
    {
      id: 3,
      name: "abwdgrcadsf",
      phone: 6543546656,
      address: "asdfsdfsadf",
      city: "asfsadf",
      state: "asfsdfsdf",
      pin: 4567456,
    },
  ]);

  const [selectAddress, setSelectAddress] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const {cart,cartDispatch}=useCart()

  const handleAddrssSelect = (adressId) => {
    setSelectAddress(adressId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectAddress) {
      setIsConfirmed(true);// Confirm booking

      cart.forEach((product) => {
            cartDispatch({
              type:"REMOVE_FROM_CART",
              payload:{id:product.id}
            })
          })

       
    } 
      
  };
  return (
    <div className="flex flex-col mt-28">
      {!isConfirmed ? (
        /* address form */
        <div className="flex justify-center items-center ">
          <form
            className="bg-gray-300 w-[400px] p-5 rounded shadow-2xl"
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-bold mb-6 text-center underline">
              Select Address
            </h1>
            {addresses.map((address) => (
              <div key={address.id} className="mb-3">
                <label className="block p-3 rounded border bg-white shadow-xl">
                  <input
                    type="radio"
                    name="selectAddress"
                    value={address.id}
                    checked={selectAddress === address.id}
                    onChange={() => handleAddrssSelect(address.id)}
                  />

                  <div>
                    <p className="font-bold">{address.name}</p>
                    <p>{address.phone}</p>
                    <p>{address.address}</p>
                    <p>
                      {address.city}, {address.state} , {address.pin}
                    </p>
                  </div>
                </label>
              </div>
            ))}
            <div className=" flex justify-center mt-6 ">
              <button onClick={()=>bookedItem(product)}
                type="submit"
                className="py-2 px-4 bg-blue-600 rounded-lg"
              >
                Confirm The Address
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex justify-center">
          <p className="bg-green-500 p-8 rounded">Booking Confirmed</p>
        </div>
      )}
    </div>
  );
};

export default AddressCard;
