/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";

const filters = ["All Products", "Vegetables", "Fruits", "Exotic Fruits", "Exotic Vegetables"];

type Product = {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export default function Products() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [activeFilter, setActiveFilter] = useState("All Products");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setAllProducts(data);
      } catch (err) {
        console.error("Failed to load products", err);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts =
    activeFilter === "All Products"
      ? allProducts
      : allProducts.filter((p) => p.category === activeFilter);

  return (
    <div className="mx-8 py-12">
      <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
        <h2 className="text-4xl font-bold text-gray-700">
          Our Products
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full border transition-all ${
                activeFilter === filter
                  ? "bg-[#F5C518] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-[#F5C518]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, idx) => (
            <div
              key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-sm w-full max-w-xs group transition-shadow duration-300 hover:shadow-2xl "
            >
              {/* Image section */}
              <div className="relative overflow-hidden">
                <img
                  src={`/products/${product.image}`}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute top-3 left-0 text-black text-sm px-4 py-1 bg-white bg-opacity-75 rounded-r-md">
                  {product.category}
                </span>
              </div>

              {/* Info section */}
              <div className="p-5 text-center border border-[#F5C518] border-t-0 rounded-b-xl">
                <h3 className="text-lg font-semibold text-gray-700">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-center gap-4">
                  <span className="font-bold text-lg text-gray-700">
                    ₹{product.price}
                  </span>
                  <button className="flex items-center gap-2 border bg-[#215527] text-white px-4 py-1 rounded-full hover:bg-[hsl(159,44%,23%)] transition cursor-pointer">
                    <FiShoppingBag />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
}
