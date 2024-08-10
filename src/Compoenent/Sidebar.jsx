
import React from "react";
import { useSelector } from "react-redux";
import {
  FaTachometerAlt,
  FaShoppingCart,
  FaUsers,
  FaUser,
  FaBox,
  FaCog,
} from "react-icons/fa";
const Sidebar = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className={`bg-gray-100  text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 ${
        theme === "dark"
          ? "dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          : ""
      }`}
    >
      <h1 className="text-2xl font-bold hidden md:block mt-4 text-center italic">
        CWY Shop
      </h1>
      <ul className="flex flex-col mt-5 text-xl">
        <li
          className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${
            theme === "dark"
              ? "hover:bg-blue-600 hover:text-white"
              : "hover:bg-blue-600"
          }`}
        >
          <FaTachometerAlt />
          <span className="hidden md:inline">Dashboard</span>
        </li>
        <li
          className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${
            theme === "dark"
              ? "hover:bg-blue-600 hover:text-white"
              : "hover:bg-blue-600"
          }`}
        >
          <FaShoppingCart />
          <span className="hidden md:inline">Orders</span>
        </li>
        <li
          className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${
            theme === "dark"
              ? "hover:bg-blue-600 hover:text-white"
              : "hover:bg-blue-600"
          }`}
        >
          <FaUsers />
          <span className="hidden md:inline">Customers</span>
        </li>
        <li
          className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${
            theme === "dark"
              ? "hover:bg-blue-600 hover:text-white"
              : "hover:bg-blue-600"
          }`}
        >
          <FaUser />
          <span className="hidden md:inline">Users</span>
        </li>
        <li
          className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${
            theme === "dark"
              ? "hover:bg-blue-600 hover:text-white"
              : "hover:bg-blue-600"
          }`}
        >
          <FaBox />
          <span className="hidden md:inline">Products</span>
        </li>
        <li
          className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${
            theme === "dark"
              ? "hover:bg-blue-600 hover:text-white"
              : "hover:bg-blue-600"
          }`}
        >
          <FaCog />
          <span className="hidden md:inline">Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
