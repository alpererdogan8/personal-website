"use client";
import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { useThemeContext } from "../context/contextAPI";
const ThemeButton = () => {
  const { contextTheme, setContextTheme } = useThemeContext();
  
  return (
    <button
      onClick={() =>
        setContextTheme(contextTheme === "dark" ? "light" : "dark")
      }
    >
      {contextTheme === "dark" ? (
        <HiSun size={24} fill={"#F2C94C"} />
      ) : (
        <HiMoon size={24} />
      )}
    </button>
  );
};

export default ThemeButton;
