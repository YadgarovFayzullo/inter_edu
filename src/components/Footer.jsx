import React from "react";
import { BsTelegram } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-slate-950">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <a
              href="https://t.me/IEandGO"
              className="text-base leading-6 text-gray-500 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out left-36 "
            >
              Блог
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-gray-500  hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out left-36 "
            >
              О нас
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="https://t.me/IEandGO"
              className="text-base leading-6 text-gray-500  hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out left-36 "
            >
              Цены
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="https://t.me/IEandGO"
              className="text-base leading-6 text-gray-500  hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out left-36 "
            >
              Контакты
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="https://t.me/IEandGO"
              className="text-base leading-6 text-gray-500  hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out left-36 "
            >
              Условия
            </a>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a
            className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out left-36 "
            href="https://t.me/IEandGO"
          >
            <BsTelegram size={25} />
          </a>
          <a
            className="text-gray-400 hover:text-white transform hover:scale-80  transition-all duration-150 ease-in-out"
            href=""
          >
            <FaInstagram size={25} />
          </a>
          <a
            className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out"
            href=""
          >
            <FaFacebook size={25} />
          </a>
        </div>
      </div>
    </section>
  );
}
