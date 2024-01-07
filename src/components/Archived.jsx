import React from "react";
import { Link } from "react-router-dom";

export default function Archived() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="mt-36 text-sm font-medium lg:text-2xl">Архив всех номеров</h1>
      </div>
      <div className="grid grid-row-col auto-cols-max gap-5 ml-14 mt-10 mb-96 lg:flex ">
        <div>
          <h1 className="bg-[#ffba5a] rounded-md py-1 px-28 text-white ">
            2023
          </h1>
          <ul className="ml-24 mt-4">
            <li>
              <a
                className="hover:text-[#ffaa34] transition-colors duration-300 text-xl font-mono"
                href="/IE&GO1.pdf"
              >
                1-son
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#ffaa34] transition-colors duration-300 text-xl font-mono"
                href="/IE&GO2.pdf"
              >
                2-son
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#ffaa34] transition-colors duration-300 text-xl font-mono"
                href="/IE&G03.pdf"
              >
                3-son
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#ffaa34] transition-colors duration-300 text-xl font-mono"
                href="/IE&GO4.pdf"
              >
                4-son
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="bg-[#ffba5a] rounded-md py-1 px-28 text-white ">
            2024
          </h1>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
