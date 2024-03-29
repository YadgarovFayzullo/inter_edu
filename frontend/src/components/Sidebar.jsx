import React from "react";
import { Link } from "react-router-dom";
import { GoArchive } from "react-icons/go";
import { FiBook } from "react-icons/fi";
import { LuNewspaper } from "react-icons/lu";
import { RiShakeHandsLine } from "react-icons/ri";

export default function Sidebar () {
  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <Link to={"/"}>
              <h1 className="text-white font-semibold text-2xl ml-2 mb-5">
                IE&GS Admin
              </h1>
            </Link>
            <Link
              to="/adminArchive"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <GoArchive />
              <span className="ms-3">Архив</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/adminBook"}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FiBook />
              <span className="flex-1 ms-3 whitespace-nowrap">Обложка</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/adminNews"}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <LuNewspaper />
              <span className="flex-1 ms-3 whitespace-nowrap">Новости</span>
            </Link>
          </li>
          <li>
            <Link
              to="/adminPartners"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <RiShakeHandsLine />
              <span className="flex-1 ms-3 whitespace-nowrap">Партнеры</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};