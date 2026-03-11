import { Routes, Route } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react"
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { ErrorPage } from "./pages/ErrorPage";
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  // FUNCTION TO LOAD CART
  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");

    setCart(response.data);
  };

  useEffect(() => {

    loadCart();

  }, []);


  return (
    <Routes>

      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />

      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />

      <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart} />} />

      <Route path="tracking" element={<TrackingPage />} />

      <Route path="errorpage" element={<ErrorPage />} />

    </Routes>

  )
}


export default App