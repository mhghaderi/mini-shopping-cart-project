import React from "react";
import { Link } from "react-router-dom";

// Icons
import { House, ShoppingCart } from "lucide-react";

const Navbar = () => {
    return (
        <>
            <header
                className="sticky top-0 bg-gray-900/95 backdrop-blur-md text-wihte shadow-2xl
            shadow-gray-950/70 border-b border-orange-800 z-10"
            >
                <div className="container mx-auto p-4 flex items-center justify-between">
                    <Link to={"/"}>
                        <div className="flex items-center space-x-3 text-4xl">
                            <House className="text-orange-400 h-9 w-9" />
                            <h1 className=" text-white font-bold tracking-widest">
                                <span className="text-orange-400">33</span>STORE
                            </h1>
                        </div>
                    </Link>
                    <Link to={"/cart"}>
                        <div
                            className=" bg-orange-500/10 rounded-lg border border-orange-400/50 hover:bg-orange-500/20
                        transition shadow-md cursor-pointer"
                        >
                            <ShoppingCart className=" m-2 text-orange-400" />
                        </div>
                    </Link>
                </div>
            </header>
        </>
    );
};

export default Navbar;
