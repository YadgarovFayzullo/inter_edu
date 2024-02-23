import React from "react";
import { useTranslation } from "react-i18next";

export default function Book() {
  const { t } = useTranslation();
  return (
    <div className="mt-5 ml-5 lg:mt-10 overflow-hidden flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/3 lg:ml-24 xl:ml-[100px] flex justify-center">
        <img
          className="shadow-lg rounded-lg lg:ml-1 lg:mr-0 lg:shadow-lg hover:shadow-2xl duration-200 w-[70%] md:w-4/6 lg:w-full xl:w-2/3"
          src="IE&GS7.png"
          alt=""
        />
      </div>
      <div className="w-full lg:w-2/3 xl:w-1/2 mt-5 md:mt-0 lg:mt-0 lg:ml-20 lg:mr-6">
        <div className="flex md:justify-center md:ml-12 lg:text-md lg:text-gray-500">
          <p>
            {t("book")} <br /> <br />
            {t("book-two")}
          </p>
        </div>
      </div>
    </div>
  );
}
