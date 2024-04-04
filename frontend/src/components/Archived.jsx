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
  const pdfFiles_2024 = [
    "IE&GS1-2024.pdf", 
    "IE&GS2-2024.pdf", 
  ];

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="mt-24 text-lg font-medium lg:text-2xl">
          {t("archived")}
        </h1>
      </div>
      <div className="grid grid-row-col auto-cols-max gap-5 justify-center mt-10 mb-96 md:flex md:flex-wrap">
        <div>
          <h1 className="bg-blue-500 rounded-md py-1 px-28 text-white ">
            2023
          </h1>
          <ul className="ml-20 mt-4">
            {pdfFiles.map((pdfFile, index) => (
              <li key={index}>
                <a
                  target="blank"
                  className="hover:text-blue-500 transition-colors duration-300 text-xl font-mono"
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
                <Link to={"/Doc"}>
                  <a
                    target="blank"
                    className="hover:text-blue-500 transition-colors duration-300 text-xl font-mono"
                    href={pdfFile}
                  >
                    {index + 1}-{t("num")}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
