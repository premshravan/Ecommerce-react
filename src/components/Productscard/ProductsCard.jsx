import React from "react";
import { useCart } from "../../Context/cart-context";
import { findProductInCart } from "../../utils/findProductInCart";
import { useNavigate } from "react-router";
import { useWishlist } from "../../Context/WishList-context";
import { findProductInWishlist } from "../../utils/findProductInWishlist";

const ProductsCard = ({ product }) => {
  const { cart, cartDispatch } = useCart();
  const { wishlist, wishlistDispatch } = useWishlist();
  const navigate = useNavigate();
  const isProductInCart = findProductInCart(cart, product.id);
  const isProductInWishlist = findProductInWishlist(wishlist, product.id);
  const onCartClick = (product) => {
    !isProductInCart
      ? cartDispatch({
          type: "ADD_TO_CART",
          payload: { product },
        })
      : navigate("/cart");
  };

  const onWishlistClick = (product) => {
    !isProductInWishlist
      ? wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: { product },
        })
      : navigate("/wishlist");
  };

  return (
    <div className="card card-vertical d-flex direction-column relative shadow  ">
      <div className="card-image-container">
        <img className="card-image " src={product.images[0]} alt="shoes" />
      </div>
      <div className="card-details">
        <div className="card-title text-xl font-bold ">{product.title}</div>
        <div className="card-description">
          <p className="card-price">
            Rs.{product.price}/-
            <span className="price-strike-through">Rs.200</span>
            <span className="discount ">(30% OFF)</span>
          </p>
        </div>
        <div className="cta-btn">
          <button
            onClick={() => onWishlistClick(product)}
            className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin bg-green-800"
          >
            <span class="material-icons-outlined">
              {isProductInWishlist ?  "favorite": "favorite_border" }
            </span>
            {isProductInWishlist ?  "Go to wishlist": "Add To wishlist"  } 
          </button>
          <button
            onClick={() => onCartClick(product)}
            className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin bg-pink-800"
          >
            <span className="material-icons-outlined">
              {isProductInCart ? "shopping_cart_checkout" : "add_shopping_cart"}
            </span>

            {isProductInCart ? "Go to cart" : "add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
