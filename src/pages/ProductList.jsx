import React from "react";
import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";
import ProductCart from "../components/ProductCart";
import { useCartContext } from "../contexts/Context";

const ProductList = () => {
    const product = useCartContext();
    return (
        <>
            <div className="container p-4 mx-auto text-white">
                <SearchFilter />
                <CategoryFilter />

                <h2 className="my-6 pt-3 px-4 border-t border-t-gray-600">
                    محصولات فروشگاه ما ({product.length})
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch">
                    {product.map((item, index) => (
                        <ProductCart key={index} data={item} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductList;
