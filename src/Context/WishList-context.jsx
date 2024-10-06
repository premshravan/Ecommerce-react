import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../Reducer/wishlistReducer";

const WishlistContext =createContext();

const WishListProvider=({children}) =>{

    const initialState ={
        wishlist:[]
    }

      const [{wishlist},wishlistDispatch] = useReducer(wishlistReducer,initialState)

    return (
        <WishlistContext.Provider value={{wishlist,wishlistDispatch}}>
            {children}
        </WishlistContext.Provider>
    )

}
 const useWishlist=()=>useContext(WishlistContext);

 export {WishListProvider,useWishlist}