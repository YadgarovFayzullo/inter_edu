import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="mt-24 ml-6 mb-5 sm:pt-10 mr-10">
        <strong>{t("who")}</strong>
        {t("location")}
        <br />
        {t("register")}
      </h1>
      <div className="bg-[#f2f4fb] py-2">
        <h1 className="ml-[50%] text-md sm:items-center md:text-2xl md:ml-[49%]">
          {t("license")}
        </h1>
        <a href="./guvohnoma.pdf" target="_blank">
          <img
            className="w-[30%] ml-[45%] mb-12 mt-12 sm:w-[20%] md:w-[15%] lg:shadow-xl lg:hover:shadow-2xl lg:duration-200"
            src="./guvohnomaa.jpg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
