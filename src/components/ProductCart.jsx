import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const ProductCart = ({ data }) => {
    return (
        <div
            className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full
     transition duration-500 transform border border-gray-800 group
     hover:scale-[1.03] hover:shadow-orange-900/40"
        >
            <Link to={"/"} className="relative overflow-hidden">
                <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-56 object-cover object-center
                duration-500 group-hover:scale-110 group-hover:opacity-90"
                />
                <div
                    className="absolute bottom-0 right-0 py-2 px-5 bg-orange-600/90 rounded-tl-2xl
                text-xl font-extrabold shadow-lg"
                >
                    {data.price}
                </div>
            </Link>
            <div className="flex flex-col grow justify-between p-4">
                <div>
                    <Link to={"/product"}>
                        <h2 className="text-2xl font-black">{data.name}</h2>
                    </Link>
                    <p className="text-gray-400 text-sm mt-2 ">{data.description}</p>
                </div>
                <div>
                    <button className=" mt-3 bg-gray-800 text-gray-300 text-xs font-light border border-gray-700 rounded-full py-1 px-3">
                        {data.category}
                    </button>
                    <button
                        className="w-full bg-orange-600 py-2 rounded-full font-danaMedium
                flex items-center justify-center gap-1 mt-5 cursor-pointer"
                        onClick={() => console.log(data.name + " clicked")}
                    >
                        <ShoppingCart className="h-5" />
                        اضافه کردن به سبر خرید
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;
