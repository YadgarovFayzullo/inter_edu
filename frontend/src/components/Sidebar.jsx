import React from "react";
import { Link } from "react-router-dom";
import { GoArchive } from "react-icons/go";
import { FiBook } from "react-icons/fi";
import { LuNewspaper } from "react-icons/lu";
import { RiShakeHandsLine } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
import { IoExitOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <div className="flex gap-2">
              <img
                className="mb-5 w-[20%] rounded-full"
                src="adminpng.png"
                alt=""
              />
              <h5 className="mt-2 text-white font-Header text-3xl">
                IEGS Admin{" "}
              </h5>
            </div>
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
          <li>
            <Link
              to="/adminDoc"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <GrDocumentText />
              <span className="flex-1 ms-3 whitespace-nowrap">Подробнее</span>
            </Link>
          </li>
          <li className="">
            <Link
              to="/"
              className="flex items-center mt-80 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <IoExitOutline size={20} />
              <span className="flex-1 ms-3 whitespace-nowrap">Выйти</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
