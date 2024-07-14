"use client";

import React from "react";
import { useTheme } from "@/provider/ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <div className="w-screen mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">My Portfolio</div>
        <button onClick={toggleTheme} className="text-2xl focus:outline-none">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
