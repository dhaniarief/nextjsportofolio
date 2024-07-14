import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto text-center text-sm text-gray-600">
        <span className="font-bold text-lg text-gray-600">
          Made By Dhani Arief
        </span>
        <span className="block mb-2">
          © {new Date().getFullYear()} All Rights Reserved
        </span>
      </div>
    </footer>
  );
}
