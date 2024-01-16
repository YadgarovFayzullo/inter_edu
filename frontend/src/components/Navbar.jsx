import React from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
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
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <BookOpenIcon className="w-7 h-7 text-blue-600" />
          <span>IE&GS</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-14" : "top-[-490px]"
          }`}
        >
        {/* <label for="countries" className="text-sm font-medium text-gray-900 dark:text-white mt-12">Select an option</label> */}
          {links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-amber-400 duration-500"
              >
                {link.name}
              </Link>{" "}
            </li>
          ))}
        <select
          id="countries"
          className="bg-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 lg:ml-3 font-Arimo"
          onChange={changeLanguageHandler}
        >
          <option value="ru">Русский</option>
          <option value="uz">O'zbek</option>
          <option value="en">English</option>
        </select>
        </ul>
      </div>
    </div>
  );
}
