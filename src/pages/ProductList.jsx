import React from "react";
import SearchFilter from "../components/SearchFilter.jsx";
import CategoryFilter from "../components/CategoryFilter.jsx";
import ProductCard from "../components/ProductCard.jsx";

import { useCart } from "../context/CartContext.jsx";
const ProductList = () => {
    const { products } = useCart();

    return (
        <div className="container mx-auto p-5">
            <SearchFilter />
            <CategoryFilter />

            <h2 className="mt-4 font-bold text-xl border-t-1 border-gray-700 py-2">Feature Gear ({products.length} items)</h2>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            justify-center items-center mt-3 gap-6"
            >
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
