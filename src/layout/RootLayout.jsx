import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { ThemeProvider } from "../context/ThemeContext";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <Outlet />
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;
