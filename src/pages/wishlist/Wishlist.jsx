import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PriceDetils from "../../components/priceDetls/PriceDetils";
import { useWishlist } from "../../Context/WishList-context";

import WishlistProductCard from "../../components/WishlistCard/WishlistProductCard";

const Wishlist = () => {
  const { wishlist } = useWishlist();
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center p-12 gap">
        <div className="mt-10">
          {wishlist.length > 0 ? (
            <>
              <p>MY WishList</p>
              <div className="flex">
              <div className="flex flex-col ">
                {wishlist.map((product) => (
                  <WishlistProductCard key={product.id} product={product} />
                ))}
              </div>
              <PriceDetils />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </main>
    </div>
  );
};

export default Wishlist;
