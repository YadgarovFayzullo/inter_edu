import React from "react";
import { Link } from "react-router-dom";

export default function Archived() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="mt-36 text-3xl font-medium">Архив всех номеров</h1>
      </div>
      <div className="flex gap-5 ml-10 mt-10 mb-96">
        <div>
          <h1 className="bg-[#ffba5a] rounded-md py-1 px-28 text-white ">
            2023
          </h1>
          <ul>
            <li>
              <a
                className="hover:text-[#ffaa34] transition-colors duration-300"
                href="/IE&GS1.pdf"
              >
                1-son
              </a>
            </li>
            <li>
              <a
                className="text-black hover:text-[#ffaa34] transition-colors duration-300"
                href="/IE&GS2.pdf"
              >
                2-son
              </a>
            </li>
            <li>
              <a
                className="text-black hover:text-[#ffaa34] transition-colors duration-300"
                href="/IE&GS3.pdf"
              >
                3-son
              </a>
            </li>
            <li>
              <a
                className="text-black hover:text-[#ffaa34] transition-colors duration-300"
                href="/IE&GS4.pdf"
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
