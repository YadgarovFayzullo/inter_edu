import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="mt-16 ml-6 mb-5 sm:pt-10 mr-10">
        <strong>{t("who")}</strong>
        {t("location")}
        <br />
        {t("register")}
        <br />
        {t("VAC")} <a target="blank" className="underline decoration-sky-500  hover:decoration-blue-600" href="https://oak.uz/pages/4802">https://oak.uz/pages/4802</a>
        <br />
        {t("created")}
      </h1>
      <div className="bg-[#f2f4fb] py-2">
        <h1 className="ml-[130px] text-md sm:items-center md:text-2xl md:ml-[300px] lg:ml-[660px]">
          {t("license")}
        </h1>
        <a href="./guvohnoma.pdf" target="blank">
          <img
            className="w-[30%] ml-[120px] mb-12 mt-12 sm:w-[20%] md:ml-[260px] md:w-[25%] lg:ml-[600px] lg:w-[15%] lg:shadow-xl lg:hover:shadow-2xl lg:duration-200"
            src="./guvohnomaa.jpg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
