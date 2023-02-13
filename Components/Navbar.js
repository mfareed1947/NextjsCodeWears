/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
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
      <div className="cart absolute right-0 top-5 mx-5 ">
        <AiOutlineShoppingCart className="text-3xl" />
      </div>
    </div>
  );
};

export default Navbar;
