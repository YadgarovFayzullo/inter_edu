import React from "react";
import { BsTelegram } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="text-white p-10 bg-gray-950">
      <div className="flex justify-evenly py-16">
        <div className="w-[20%] leading-10">
          <ul>
            <li className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out gap-10 ">
              About Us
            </li>
            <li className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out ">
              Terms & Conditions{" "}
            </li>
            <li className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out ">
              Privacy Policy
            </li>
            <li className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out ">
              Rooms
            </li>
          </ul>
        </div>

        <div className="w-[20%] leading-10">
          <ul>
            <li className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out ">
              The Rooms & Suites
            </li>
            <li className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out ">
              About Us
            </li>
            <li className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out ">
              Contact Us
            </li>
           
            <strong>ISSN 2992-9024 </strong>
           
          </ul>
        </div>
        <div>
          <div className="">
            <div className="flex items-center gap-2">
              <IoLocationSharp />
              <span>address:</span>
            </div>
            <h1 className="text-gray-400 content-between">
              Uzbekistan Bukhara. <br />
              s.Yangiyul,51 200100
            </h1>
          </div>
          <div>
            <div className="flex items-center gap-2 mt-8">
              <FaPhone />
              <span>Phone:</span>
            </div>
            <h1 className="text-gray-400">
              0 (365) 224-69-98 <br />
               +99897 300-34-00
            </h1>
          </div>
          <div>
            <div className="flex items-center gap-2 mt-6">
              <MdOutlineMail />
              <span>Email:</span>
            </div>
            <h1 className="text-gray-400">nodirbekyadgarov@gmail.com</h1>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 justify-center gap-5 ">
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
    </footer>
  );
}
