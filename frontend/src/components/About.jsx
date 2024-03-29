import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="mt-[80px] ml-6 mb-5 sm:pt-10 mr-10">
        <strong>{t("who")}</strong>
        {t("location")}
        <br />
        {t("register")}
        <br />
        {t("VAC")}{" "}
        <a
          target="blank"
          className="underline decoration-sky-500  hover:decoration-blue-600"
          href="https://oak.uz/pages/4802"
        >
          https://oak.uz/pages/4802
        </a>
        <br />
        {t("created")}
      </h1>
      <div className="py-12 flex flex-col items-center justify-center">
        <div className="text-sm  sm:text-xl lg:text-xl text-center text-white mb-1 bg-[#5d9cec] px-12 sm:px-14 md:px-20 lg:px-[70px]">
          {t("license")}
        </div>
        <a
          href="./guvohnoma.pdf"
          target="_blank"
          className="flex items-center justify-center"
        >
          <img
            className="w-[45%] sm:w-[35%] md:w-[40%] lg:w-[40%] max-w-[600px] mb-12 lg:shadow-xl lg:hover:shadow-2xl lg:duration-200 mx-auto"
            src="./guvohnomaa.jpg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
