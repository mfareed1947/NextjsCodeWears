/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useRef } from "react";
import { AiFillCloseCircle, AiOutlineShoppingCart, AiOutlinePlusCircle, AiOutlineMinusCircle, AiFillShopping } from "react-icons/ai";
const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full")
      ref.current.classList.add("translate-x-0")
      ref.current.classList.remove("hidden")

    } else if (ref.current.classList.contains("translate-x-0")) {
      ref.current.classList.remove("translate-x-0")
      ref.current.classList.add("translate-x-full")
      // ref.current.classList.add("hidden")
    }

  }
  const ref = useRef()
  return (
    <>
      <div className="px-2 py-4 flex flex-col md:justify-start md:flex-row items-center justify-center shadow-md">
        {/* logo image */}
        <div className="loog mx-5">
          <Link href={"/"}>
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        {/* nav content */}
        <div className="nav">
          <ul className="flex space-x-4 items-center font-bold md:text-md ">
            <Link href={"/tshirts"}>
              <li>Tshirts</li>
            </Link>
            <Link href={"/hoodies"}>
              <li>Hoodies</li>
            </Link>
            <Link href={"/stickers"}>
              <li>Stickers</li>
            </Link>
            <Link href={"/mugs"}>
              <li>Mugs</li>
            </Link>
          </ul>
        </div>
        <div className="cart absolute right-0 top-5 mx-5 cursor-pointer ">
          <AiOutlineShoppingCart onClick={toggleCart} className="text-3xl" />
        </div>
        <div ref={ref} className="sidebar bg-pink-200 absolute z-50 w-4/5 md:w-2/5 h-full top-0 right-0 py-10 px-8 hidden transform duration-200 ease-out transition-transform translate-x-full">
          <h2 className="text-center text-xl font-semibold">Your Cart is Here</h2>
          <span onClick={toggleCart} className="absolute top-6 right-2 text-2xl cursor-pointer text-pink-500 px-2"> <AiFillCloseCircle /></span>
          <ol className="px-6 py-2">
            <li className="flex justify-between pt-6">
              <div>basic T-shirt is free</div>
              <div className="flex items-center justify-center space-x-2">
                <AiOutlineMinusCircle className="text-xl cursor-pointer text-pink-600" />
                <input type="text" className="w-6" />
                <AiOutlinePlusCircle className="text-xl cursor-pointer text-pink-600" />
              </div>
            </li>
            <li className="flex justify-between pt-6">
              <div>basic T-shirt is free</div>
              <div className="flex items-center justify-center space-x-2">
                <AiOutlineMinusCircle className="text-xl cursor-pointer text-pink-600" />
                <input type="text" className="w-6" />
                <AiOutlinePlusCircle className="text-xl cursor-pointer text-pink-600" />
              </div>
            </li>
            <li className="flex justify-between pt-6">
              <div>basic T-shirt is free</div>
              <div className="flex items-center justify-center space-x-2">
                <AiOutlineMinusCircle className="text-xl cursor-pointer text-pink-600" />
                <input type="text" className="w-6" />
                <AiOutlinePlusCircle className="text-xl cursor-pointer text-pink-600" />
              </div>
            </li>
          </ol>
          <div className="flex pt-6 flex-wrap">
            <button class="flex ml-2 md:ml-10 text-white bg-pink-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded">
              <AiFillShopping className="text-xl pr-1" />checkout</button>
            <button class="flex ml-2 md:ml-10 text-white bg-pink-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded">cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
