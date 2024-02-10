import React from "react";
import { useTranslation } from "react-i18next";

export default function Book() {
  const { t } = useTranslation();
  return (
    <div className="mt-5 ml-5 w-auto h-auto lg:mb-12 lg:mt-9">
      <div className="lg:flex lg:justify-around lg:mb-16">
        <div className="w-[75%] pl-12 lg:w-[75%]">
          <img
            className="shadow-lg rounded-lg md:ml-[90px] lg:mr-[130px] lg:justify-around lg:shadow-lg hover:shadow-2xl duration-200 lg:ml-40"
            src="/book2.png"
            alt=""
          />
        </div>
        <div>
          <p className="text-sm mt-5 mr-16 ml-5 mb-4 sm:mr-24 md:mt-[5%] sm:ml-[5%] md:ml-[140px] md:mr-[132px] lg:ml-[270px] lg:mr-[300px] lg:text-md lg:text-gray-500">
            {t("book")}  <br /> <br />
            {t("book-two")}
            {t(" ")}
          </p>
        </div>
      </div>
    </div>
  );
}
