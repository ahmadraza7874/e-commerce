"use client";

import React from "react";
import { initialProducts } from "../data/Data";
import { Tag } from "lucide-react";

const availableCategories = [
  "All",
  ...new Set(initialProducts.map((p) => p.category)),
];

type Props = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const CategoryFilter = ({
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  return (
    <div className="flex flex-wrap gap-3 border-b border-gray-800 pb-6">

      <Tag className="w-5 h-5 text-orange-500 mt-2 mr-2 hidden sm:block ml-6" />

      {availableCategories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-5 py-2 text-sm font-bold rounded-full transition duration-200 ${
            selectedCategory === category
              ? "bg-orange-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;