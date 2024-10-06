import React from "react";
import { useCart } from "../../Context/cart-context";
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";
import { useNavigate } from "react-router";


const PriceDetils = () => {
  const navigate=useNavigate();
  const { cart } = useCart();
 const totalCartAmount=  getTotalCartAmount(cart);
 const deliveryCharge=10;
  return (
    <div className="gap card w-[300px] h-[260px] bg-slate-300 p-3">
      <h1 className=" flex flex-column text-2xl border-x-2 border-y-4 border-red-600">Price Details</h1>
      <div className="flex flex-col  ">
        <div className="flex ">
          <p>Price ({cart.length}) items -</p>
          <p className="ml-auto">Rs. {totalCartAmount} </p>
        </div>
        <div className="flex border-b">
          <p>Delivery charge -</p>
          <p className="ml-auto">Rs.{deliveryCharge}</p>
        </div>
      </div>
      <div className="flex gap border-b">
        <p>Total Amount - </p>
        <p className="ml-auto">Rs.{totalCartAmount+deliveryCharge} </p>
      </div>
      <div>
        <button onClick={()=>navigate('/placeorder')} className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin bg-green-800">Place order</button>
      </div>
    </div>
  );
};

export default PriceDetils;
