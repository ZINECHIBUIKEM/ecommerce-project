import { Routes, Route } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react"
import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { ErrorPage } from "./pages/ErrorPage";
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items").then((response) => {
      setCart(response.data)
    })
  }, [])



  return (
    <Routes>

      <Route index element={<HomePage cart={cart} />} />

      <Route path="checkout" element={<CheckoutPage cart={cart} />} />

      <Route path="orders" element={<OrdersPage />} />

      <Route path="tracking" element={<TrackingPage />} />

      <Route path="errorpage" element={<ErrorPage />} />

    </Routes>

  )
}

export default App
