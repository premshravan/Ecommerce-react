import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import AuthLogin from "./pages/AuthLogin/AuthLogin";
import Wishlist from "./pages/wishlist/Wishlist";
import Address from "./pages/Address/address";
import NewUser from "./pages/NewUser/NewUser";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element ={<Wishlist/>} />
        <Route path='/auth/login' element={<AuthLogin />}/>
        <Route path="/placeorder" element={<Address />} />
        <Route path ="/usercreation" element={<NewUser />}/>
      </Routes>
    </>
  );
}

export default App;
