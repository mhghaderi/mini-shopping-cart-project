import React from "react";
import { Link } from "react-router-dom";

import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
    console.log(product);
    return (
        <div>
            <div
                className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden
            flex flex-col h-full transition duration-500 transform border border-gray-800
            hover:scale-[1.03] hover:shadow-orange-900/10 group"
            >
                <Link to={`/product/${product.id}`} className="relative  bg-white overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-60 object-contain object-center
                        group-hover:scale-110 transition-transform duration-500 "
                    />
                    <div className=" absolute bottom-0 left-0 bg-orange-600 py-1 px-2 text-xl font-medium rounded-tr-xl shadow-lg">
                        {product.price}
                    </div>
                </Link>
                <div className="p-3">
                    <h3 className="font-bold text-xl line-clamp-1 ">{product.name}</h3>
                    <p className="text-gray-600 leading-5 mt-2 border-t pt-2 border-gray-600 line-clamp-2">
                        {product.description}
                    </p>
                    <span className=" text-sm text-gray-500 bg-gray-800 border border-gray-700 py-1 px-3 rounded-2xl inline-block mt-3 ">
                        {product.category}
                    </span>

                    <button
                        className="flex gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 mt-4 rounded-lg
                    items-center justify-center w-full font-medium transition"
                    >
                        <ShoppingCart />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
