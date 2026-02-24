import React, { useState } from "react";
import { category } from "../data/data";
import { Tag } from "lucide-react";

const CategoryFilter = () => {
    const [isSelected, setIsSelected] = useState("All");
    return (
        <>
            <div>
                <div className="mt-3 flex items-center space-x-4 text-orange-400">
                    <Tag />
                    {category.map((cat) => (
                        <button
                            key={cat}
                            className={`
                       text-sm p-1 px-4 min-w-20 rounded-full
                      flex items-center justify-center transition
                       ${isSelected === cat ? "bg-orange-600 text-white" : "bg-gray-500/20 border border-gray-400/20 text-gray-200 hover:bg-gray-400/30 hover:border-orange-400"}     
                        `}
                            onClick={() => setIsSelected(cat)}
                        >
                            {cat}
                        </button>
                    ))}{" "}
                </div>
            </div>
        </>
    );
};

export default CategoryFilter;
