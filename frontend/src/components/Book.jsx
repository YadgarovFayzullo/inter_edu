import React from "react";
import { useTranslation } from "react-i18next";

export default function Book() {
  const { t } = useTranslation();
  return (
    <div class="mt-5 ml-5 w-auto h-auto lg:mb-12 lg:mt-9 overflow-hidden">
      <div class="lg:flex lg:items-center lg:mb-16">
        <div class="sm:ml-12 w-full lg:w-1/3 ml-6 md:ml-10 md:mb-10 lg:ml-24 xl:ml-[100px]">
          <img
            class="shadow-lg rounded-lg md:ml-12 lg:ml-1 lg:mr-0 lg:shadow-lg hover:shadow-2xl duration-200 w-48 md:w-4/6 lg:w-full xl:w-2/3"
            src="/book2.png"
            alt=""
          />
        </div>
        <div class="w-full lg:w-1/1 xl:w-1/2">
          <p class="text-sm mt-5 mr-6 md:mt-0 md:ml-12 lg:ml-20 lg:mr-6 lg:text-md lg:text-gray-500">
            {t("book")} <br /> <br />
            {t("book-two")}
          </p>
        </div>
      </div>
    </div>
  );
}
