import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <div className="relative sm:ml-24">
      <div className="fixed w-full z-50 top-0 left-0 bg-white text-black text-xl py-4 flex items-center justify-center font-NavFont">
        <div className="items-center flex">
          <Link to={"/"} className="link">
            <h1 className="text-[22px] px-4 font-normal">Главная</h1>
          </Link>
          <Link to={"/redaction"} className="link">
            <h1 className="text-[22px] px-4 font-normal">
              Редакционная коллегия
            </h1>
          </Link>
          <a href="./maqola_talablari.pdf" target="_blank" className="link">
            Правила оформления статей
          </a>
          <Link to={"/PubRules"} className="link">
            <h1 className="text-[22px] px-4 font-normal">
              Условия публикации
            </h1>
          </Link>
          <Link to={"/archive"} className="link">
            <h1 className="text-[22px] px-4 font-normal">Архив</h1>
          </Link>
          <Link to={"/about"} className="link">
            <h1 className="text-[22px] px-4 font-normal">О нас</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
