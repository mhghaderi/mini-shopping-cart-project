import React from "react";
import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";

const ProductList = () => {
    return (
        <>
            <div className="container p-4 mx-auto">
                <SearchFilter />
                <CategoryFilter />
            </div>
        </>
    );
};

export default ProductList;
