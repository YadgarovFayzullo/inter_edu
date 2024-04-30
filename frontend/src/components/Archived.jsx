import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Archived() {
  const { t } = useTranslation();

  const pdfFiles = [
    "/IE&GS1.pdf",
    "/IE&GS2.pdf",
    "/IE&GS3.pdf",
    "/IE&GS4.pdf",
    "/IE&GS5.pdf",
  ];
  const pdfFiles_2024 = ["IE&GS1-2024.pdf", "IE&GS2-2024.pdf","/edition"];

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="mt-24 text-2xl font-Montserrat lg:text-3xl">
          {t("archived")}
        </h1>
      </div>
      <div className="grid grid-row-col auto-cols-max items-center justify-center md:justify-normal md:items-baseline md:ml-7 gap-5 mt-10 mb-96 md:flex">
        <div>
          <h1 className="bg-blue-500 rounded-md py-1 px-28 text-white ">
            2023
          </h1>
          <ul className="ml-20 mt-4">
            {pdfFiles.map((pdfFile, index) => (
              <li key={index}>
                <a
                  target="blank"
                  className="hover:text-blue-500 transition-colors duration-300 text-xl"
                  href={pdfFile}
                >
                  {index + 1}-{t("num")}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="bg-blue-500 rounded-md py-1 px-28 text-white ">
            2024
          </h1>
          <ul className="ml-20 mt-4">
            {pdfFiles_2024.map((pdfFile, index) => (
              <li key={index}>
                <a
                  className="hover:text-blue-500 transition-colors duration-300 text-xl font-mono"
                  href={pdfFile}
                >
                  {index + 1}-{t("num")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
