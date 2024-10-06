import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../../Context/login-Context";
import { useCart } from "../../Context/cart-context";
import { useWishlist } from "../../Context/WishList-context";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropDownOpen, setisDropDownOpen] = useState(false);
  const { token, loginDispatch } = useLogin();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const onLoginClick = () => {
    if (token?.access_token) {
      navigate("/auth/login");
    } else {
      loginDispatch({
        type: "LOGOUT",
      });
      navigate("/auth/login");
    }
  };

  return (
    <header className="flex  bg-green-900 py-3 px-5 text-cyan-200 fixed w-screen z-10 ">
      <div>
        <h1
          onClick={() => navigate("/")}
          className="text-4xl hover:cursor-pointer border border-emerald-300 bg-indigo-800 py-1 px-1"
        >
          Shop It
        </h1>
      </div>
      <nav className="ml-auto flex gap-6 ">
        <div>
          <span
            onClick={() => navigate("/wishlist")}
            className="material-icons-outlined text-4xl hover:cursor-pointer"
          >
            favorite
          </span>
          {wishlist.length >0 ? (
          <div className="icon-badge absolute">
         <div className="badge-number avatar-badge d-flex justify-center">
                {wishlist.length}
         </div>
          </div>
          ):(
            null
          )}
        </div>
        <div>
          <span
            onClick={() => navigate("/cart")}
            className="material-icons-outlined text-4xl hover:cursor-pointer"
          >
            shopping_cart
          </span>
          {/* <span className="text-red-400 border card items-center rounded ">{cart.length > 0 && cart.length}</span> */}
          {cart.length > 0 ? (
            <div className="icon-badge absolute ">
              <div class="badge-number avatar-badge d-flex justify-center">
                {cart.length}
              </div>
            </div>
          ) : null}
        </div>

        <div className="relative">
          <span
            onClick={() => setisDropDownOpen(!isDropDownOpen)}
            className="material-icons-outlined text-4xl hover:cursor-pointer"
          >
            account_circle
          </span>
          {isDropDownOpen && (
            <div className="bg-purple-500 px-2 mr-2">
              <button onClick={onLoginClick}>
                {token?.access_token ? "Logout" : "Login"}
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
