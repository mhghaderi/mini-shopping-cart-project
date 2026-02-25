import React from "react";
import { Link } from "react-router-dom";
const ProductCart = ({ data }) => {
    console.log(data);

    return (
        <div
            className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full
     transition duration-500 transform border border-gray-800 group
     hover:scale-[1.03] hover:shadow-orange-900/40"
        >
            <Link to={"/"}>
                <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-56 object-cover object-center
                duration-500 group-hover:scale-110 group-hover:opacity-90"
                />
                <div className="bg-orange-500/90 absolute bottom-0 right-0 py-2 px-5 rounded-tl-2xl">
                    {data.price}
                </div>
            </Link>
        </div>
    );
};

export default ProductCart;
