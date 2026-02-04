import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
    console.log(product);
    return (
        <div>
            <div
                className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden
            flex flex-col h-full transition duration-500 transform border border-gray-800
            hover:scale-[1.03] hover:shadow-orange-900/10 group"
            >
                <Link to={"/product"} className="relative cursor-pointer overflow-hidden bg-white">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-60 object-contain object-center
                        group-hover:scale-110 transition-transform duration-500 "
                    />
                    <div className=" absolute bottom-0 left-0 bg-orange-600 py-1 px-2 text-xl font-medium rounded-tr-xl shadow-lg">{product.price}</div>
                </Link>
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
