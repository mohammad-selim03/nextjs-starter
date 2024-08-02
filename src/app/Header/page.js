"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const HeaderPage = () => {
  const menus = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Categories",
      path: "/categories",
    },
  ];

const pathname = usePathname()

  return (
    <div className="flex justify-between items-center bg-gray-600 p-4  text-white">
      <h3 className="text-2xl font-bold">
        <Link href={"/"}>LOGO</Link>
      </h3>
      <div className="text-lg flex items-center gap-12 cursor-pointer ">
        {menus?.map((menu) => (
          <>
            <div className="group">
              <p className="relative">
                <Link href={menu.path} className={pathname  === menu.path ? "text-green-500 font-bold underline" : ""}>{menu.title}</Link>
              </p>
            <div className="absolute rounded-xl h-1 w-20 transition-shadow  duration-800 "></div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default HeaderPage;
