import React from "react";
import ChevronRight from "../icons/chevronright";
import ChevronLeft from "../icons/chevronleft";
import ProductCard from "../icons/productcard";

function FisrtShow() {
  return (
    <section className="w-[80%] mx-auto flex h-[100vh] overflow-hidden">
      <div className="w-2/6 bg-firstshow bg-cover bg-center h-full">
        <div className="p-5 text-white bg-black bg-opacity-50">
          <h2 className="text-lg font-bold">Featured Product</h2>
          <p>5 items</p>
        </div>
      </div>
      <div className="w-4/6 ml-5">
        <div className="flex items-center justify-between bg-gray-100 p-5 shadow-md">
          <div className="w-1/5 text-2xl font-bold">
            <h2>Bestseller</h2>
          </div>
          <div className="flex w-4/5 justify-between items-center">
            <ul className="flex w-2/3 gap-5 text-gray-700">
              <li className="hover:text-gray-900 cursor-pointer">Men</li>
              <li className="hover:text-gray-900 cursor-pointer">Women</li>
              <li className="hover:text-gray-900 cursor-pointer">Accessories</li>
            </ul>
            <div className="flex w-1/3 gap-2 items-center">
              <ChevronLeft />
              <ChevronRight />
            </div>
          </div>
        </div>
        <hr className="opacity-25" />  
        <div className="flex flex-wrap p-5 gap-4">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </div>
      </div>
    </section>
  );
}

export default FisrtShow;
