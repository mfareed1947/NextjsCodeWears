/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useRef } from "react";
import { AiFillCloseCircle, AiOutlineShoppingCart, AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.add("translate-x-0")
      ref.current.classList.remove("translate-x-full")
    } else if (ref.current.classList.contains("translate-x-0")) {
      ref.current.classList.remove("translate-x-0")
      ref.current.classList.add("translate-x-full")
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
        <div ref={ref} className="bg-pink-100 absolute p=10 top-0 shadow-md right-0 w-2/5 h-full z-10 transform transition-all translate-x-full">
          <span  onClick={toggleCart} className="absolute top-6 right-0 text-2xl cursor-pointer text-pink-500 px-2"> <AiFillCloseCircle /></span>
          <h2 className="text-center font-semibold p-10">Your Cart is Here</h2>
          <ol className="px-6">
            <li className="flex justify-between">
              <div>basic T-shirt is free</div>
              <div className="flex">
                <AiOutlineMinusCircle />
                <input type="text" className="w-6" />
                <AiOutlinePlusCircle />
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Navbar;
