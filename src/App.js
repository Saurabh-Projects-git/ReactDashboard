import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./Compoenent/Sidebar";
import Navbar from "./Compoenent/Navbar";
import Dashboard from "./Compoenent/Dashboard";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./redux/ThemeSlice";

function App() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`flex ${theme === "dark" ? "dark" : ""} h-screen scrollbar-hide overflow-auto `}>
      <Sidebar />
      <div
        className={`flex-1 ml-16 md:ml-64 h-full bg-gray-100 text-gray-900 ${
          theme === "dark" ? "dark:bg-gray-900 dark:text-white" : ""
        }`}
      >
        <Navbar theme={theme} toggleTheme={handleToggleTheme} />
        <div >
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
