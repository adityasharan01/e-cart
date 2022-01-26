import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Contexts/UserContext/UserContext";
import GlobalState from "./Contexts/CartContext/GlobalState";
// import { CartProvider } from "./Contexts/CartContext/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        {/* <CartProvider> */}
        <GlobalState>
          <App />
        </GlobalState>
        {/* </CartProvider> */}
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
