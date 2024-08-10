import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <div className="bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex items-center justify-between">
      <h1>Dashboard</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
};

export default Navbar;
