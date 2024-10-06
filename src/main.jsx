import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/cart-context";
import { LoginProvider } from "./Context/login-Context.jsx";
import { WishListProvider } from "./Context/WishList-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WishListProvider>
          <LoginProvider>
            <App />
          </LoginProvider>
        </WishListProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
