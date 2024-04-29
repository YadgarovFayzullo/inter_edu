import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "./Layout";

const Editions: React.FC = () => {
  const pdfFiles = ["IE&GS-2024-3(1).pdf", "IE&GS-2024-3(2).pdf"];

  const { t } = useTranslation();
  return (
    <section className="mt-24">
      <div className="grid grid-row-col auto-cols-max items-center justify-center md:justify-normal md:items-baseline md:ml-7 gap-5 mt-10 mb-96 md:flex">
        <div>
          <h1 className="bg-blue-500 rounded-md py-1 px-28 text-white">
            Выпуск
          </h1>
          <ul className="ml-20 mt-4">
            {pdfFiles.map((pdfFile, index) => (
              <li key={index}>
                <a
                  href={pdfFile}
                  target="_blank"
                  className="hover:text-blue-500 transition-color text-xl"
                >
                  {index + 1}-{t("issue")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Layout children={undefined} />
    </section>
  );
};

export default Editions;
