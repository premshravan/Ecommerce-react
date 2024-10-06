import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HorizontlProductsCard from "../../components/HorizontalCard/HorizontlProductsCard";
import { useCart } from "../../Context/cart-context";
import PriceDetils from "../../components/priceDetls/PriceDetils";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center pt-12 font-bold gap">
        {cart.length > 0 ? (
          <>
            <p className="ml-2 mt-10 bg-red-600 w-24 p-3 ">My Cart</p>
            <div className="flex">
              <div className="flex flex-col pt-2 gap-4">
                {cart?.length > 0 &&
                  cart.map((product) => (
                    <HorizontlProductsCard key={product.id} product={product} />
                  ))}
              </div>

              <PriceDetils />
            </div>
          </>
        ) : (
          <>
            <div>This Cart is Empty</div>
            <button
              onClick={() => navigate("/")}
              className="underline border hover:bg-green-800 hover:text-pink-600 bg-indigo-800 p-3 text-yellow-200 rounded-lg "
            >
              Click here to add items in Cart
            </button>
          </>
        )}
      </main>
    </div>
  );
};

export default Cart;
