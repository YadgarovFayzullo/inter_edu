import React from "react";
import { useTranslation } from "react-i18next";

export default function Archived() {
  const { t } = useTranslation();

  const pdfFiles = [
    "/IE&GS1.pdf",
    "/IE&GS2.pdf",
    "/IE&GS3.pdf",
    "/IE&GS4.pdf",
    "/IE&GS5.pdf",
  ];

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="mt-24 text-lg font-medium lg:text-2xl">
          {t("archived")}
        </h1>
      </div>
      <div className="grid grid-row-col auto-cols-max gap-5 ml-7 mt-10 mb-96 lg:flex ">
        <div>
          <h1 className="bg-[#ffba5a] rounded-md py-1 px-28 text-white ">
            2023
          </h1>
          <ul className="ml-20 mt-4">
            {pdfFiles.map((pdfFile, index) => (
              <li key={index}>
                <a
                  target="blank"
                  className="hover:text-[#ffaa34] transition-colors duration-300 text-xl font-mono"
                  href={pdfFile}
                >
                  {index + 1}-{t("num")}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="bg-[#ffba5a] rounded-md py-1 px-28 text-white ">
            2024
          </h1>
        </div>
      </div>
    </div>
  );
}
