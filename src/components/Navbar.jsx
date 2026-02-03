import React from "react";
import { ShoppingCart, Home } from "lucide-react";
const Navbar = () => {
  return (
    <>
      <header
        className="sticky top-0 bg-gray-950/90 backdrop-blur-md text-white shadow-2xl
      shadow-gray-950/70 border-b border-orange-900"
      >
        <div className="container mx-auto p-4 flex items-center justify-between"></div>
        <div className="flex items-center space-x-4 cursor-pointer">
          <Home />
        </div>
      </header>
    </>
  );
};

export default Navbar;
