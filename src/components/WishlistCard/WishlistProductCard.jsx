import React from "react";
import { useWishlist } from "../../Context/WishList-context";

const WishlistProductCard = ({ product }) => {
  const { wishlistDispatch } = useWishlist();

  const onRemoveClick = (product) => {
    wishlistDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: { id: product.id },
    });
  };

  return (
    <div className="card-horizontal d-flex shadow m-5 p-1">
      <div className="card-hori-image-container relative">
        <img className="card-image" src={product.images[0]} alt="imges" />
        <small className="c-badge bg-purple-600 absolute left-0 top-0">
          Trending
        </small>
      </div>
      <div className="card-details d-flex direction-column">
        <div className="card-des text-sm">{product.title}</div>
        <div className="card-description">
          <p className="card-price ">
            Rs.{product.price}/-
            <span className="price-strike-through padding-all-8">
              Rs.2000/-
            </span>
            <span className="discount padding-all-8">(30% off)</span>
          </p>
        </div>
        <div className="quantity-conatiner d-flex gap">
          <p className="q-title"> Quantity :</p>
          <div className="count-container d-flex align-center gap">
            <button className="count">-</button>
            <span className="count-value">1</span>
            <button className="count">+</button>
          </div>
        </div>
        <div className="cta-btn d-flex gap">
          <button
            onClick={() => onRemoveClick(product)}
            className="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin text"
          >
            {" "}
            Remove from Wishlist
          </button>

          <div className="cta-btn">
            <button className="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin text">
              Move to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistProductCard;
