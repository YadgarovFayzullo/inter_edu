import React from "react";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { FaBookReader } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
} 

export default function Navbar({ changeLang }) {
  const { t } = useTranslation();

  const changeLanguageHandler = (e) => {
    changeLang(e.target.value);
  };

  let links = [
    { name: t("main"), link: "/" },
    { name: t("redaction"), link: "/redaction" },
    { name: t("conditions"), link: "/rules" },
    { name: t("archive"), link: "/archive" },
    { name: t("partners"), link: "/partners" },
    { name: t("about"), link: "/about" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 font-Montserrat z-50"> {/* Adjusted z-index */}
      <div className="md:flex items-end justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <FaBookReader className="w-7 h-7 text-blue-600" />
          <Link to={"/"}>
            <h1>
              <span>IE&GS</span>
            </h1>
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-14" : "top-[-490px]"
          }`}
        >
          <div className="mt-5 md:mt-0">
            <a
              target="blank"
              href="https://portal.issn.org/resource/ISSN/2992-9024"
            >
              {/* ISSN 2992-9024 (Online) */}
            </a>
          </div>
          {links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-7 font-medium">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-[#f0582f] duration-200"
              >
                {link.name}
              </Link>{" "}
            </li>
          ))}
          <Link className="sm:block md:hidden btn1" to={'/login'}>
            <button className="flex md:ml-3 border px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded focus:outline-none focus:shadow-outline">Войти</button>
          </Link>
          <select
            id="countries"
            className="bg-white text-gray-900 text-sm rounded-lg focus:ring-[#f0582f] focus:border-blue-500 p-2 lg:ml-3 font-Montserrat"
            onChange={changeLanguageHandler}
          >
            <option value="ru">Русский</option>
            <option value="uz">O'zbek</option>
            <option value="en">English</option>
          </select>
          <Link className="md:block hidden btn2" to={'/login'}>
            <button className="flex md:ml-3 px-3 py-1 text-[#f0582f] hover:text-[#fe9375] font-semibold rounded focus:outline-none focus:shadow-outline">Войти</button>
          </Link>
        </ul>
      </div>
    </div>
  );
}
