"use client";

import { useUser } from "@/provider/UserProvider";
import Link from "next/link";
import React, { useState } from "react";

export default function InputUser() {
  const { username, setUsername } = useUser();
  const [inputValue, setInputValue] = useState(username || "");

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setUsername(inputValue);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 w-1/2">
      <div className="rounded-lg p-6 w-full shadow-md dark:shadow-slate-600 flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Enter your name</h2>
        <input
          id="name"
          autoComplete="name"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-2 mb-4 bg-inherit border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Link
          href="/dashboard"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center"
          onClick={handleSubmit}
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
