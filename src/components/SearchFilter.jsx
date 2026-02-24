import React from "react";
// Icons
import { Search } from "lucide-react";

const SearchFilter = () => {
    return (
        <>
            <div className="my-2 p-3 bg-gray-700/50 rounded-xl">
                <div className="p-2 px-4 bg-gray-700  rounded-lg  w-full flex itemscenter
                focus-within:ring-3 focus-within:ring-orange-600/50 transition duration-300">
                    <input
                        type="text"
                        className="w-full outline-none text-white  overflow-hidden h-10 text-xl placeholder:text-lg"
                        placeholder="جستجو بر اساس نام یا ویژگی ها ..."
                    />
                    <Search className=" h-10 text-white hover:text-gray-200 hover:scale-105transition cursor-pointer" />
                </div>
            </div>
        </>
    );
};

export default SearchFilter;
