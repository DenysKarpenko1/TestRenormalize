"use client";

import { useState } from "react";
import Table from "../components/Table";
import Image from "next/image";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <main className={`p-4 ${isDarkMode ? "dark" : ""}`}>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="border rounded-lg px-4 py-2 bg-black
            dark:bg-white "
        >
          <Image
            src="/moon.svg"
            alt="moon"
            width={32}
            height={32}
            className="filter invert dark:filter-none"
          />
        </button>
      </div>
      <Table />
    </main>
  );
};

export default Home;
