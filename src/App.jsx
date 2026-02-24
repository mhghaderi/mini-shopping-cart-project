import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Pages
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { category } from "./data/data";

const App = () => {
    console.log(category)
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-950 font-vazir font-danaRegular">
                <Navbar />
                <Routes>
                    <Route index element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
