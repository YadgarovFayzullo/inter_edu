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
          <ul className="ml-20 mt-4">
            <li>
              <a
                className="hover:text-[#ffaa34] transition-colors duration-300 text-xl font-mono"
                href="/IE&GS1.pdf"
              >
                1-выпуск
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#ffaa34] transition-colors duration-300 text-xl font-mono"
                href="/IE&GS2.pdf"
              >
                2-выпуск
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#ffaa34] transition-colors duration-300 text-xl font-mono"
                href="/IE&GS3.pdf"
              >
                3-выпуск
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#ffaa34] transition-colors duration-300 text-xl font-mono"
                href="/IE&GS4.pdf"
              >
                4-выпуск
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
