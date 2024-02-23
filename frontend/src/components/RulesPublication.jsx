import React from "react";
import { useTranslation } from "react-i18next";

export default function RulesPublication() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="mt-28 mb-5 ml-7 mr-4 sm:mb-6">
        <h1 className="mb-2 font-bold md:mb-2 flex justify-center">
          {t("info-journal")}
        </h1>
        <h1>{t("journal-text")}</h1>
        <h1 className="font-bold text-lg flex justify-center mt-4 mb-2 md:mt-7 md:mb-2 lg:mt-5 lg:mb-5">
          {t("rules-doc")}
        </h1>
        <ul>
          <li>{t("imrad")}</li>
          <li>{t("doc-lang")}</li>
          <li>{t("doc-themes")}</li>
          <li>{t("doc-format")}</li>
          <li>{t("doc-style")}</li>
          <li>{t("doc-check")}</li>
          <li>{t("doc-license")}</li>
          <li>{t("doc-originality")}</li>
          <li>{t("doc-elect")}</li>
          <li>{t("doc-date")}</li>
          <li>{t("doc-off")}</li>
          <li>{t("doc-publish")}</li>
          <li>
            {t("doc-site")}
            <a
              className="font-bold ml"
              href="https://iegs-scientificjournal.vercel.app"
            >
              iegs-scientificjournal.vercel.app
            </a>
          </li>
          <li>{t("doc-variant")}</li>
          <li>
            {t("doc-delete")}
            <a
              className="font-bold flex"
              href="https://iegs-scientificjournal.vercel.app"
            >
              {" "}
              iegs-scientificjournal.vercel.app
            </a>
          </li>
          <li>{t("doc-send")}</li>
        </ul>
      </div>
      <div className="bg-[#f2f4fb] py-12 flex flex-col items-center justify-center">
        <div className="text-sm  sm:text-xl lg:text-xl text-center text-white mb-1 bg-[#5d9cec] px-7 sm:px-14 md:px-13 lg:px-6">
          {t("public-rules")}
        </div>
        <a href="./maqola_talablari.pdf" target="_blank">
          <img
            className="w-[50%] sm:w-[50%] md:w-[60%] lg:w-[40%] max-w-[600px] mb-12 lg:shadow-xl lg:hover:shadow-2xl lg:duration-200 mx-auto"
            src="./rules.png"
            alt="Maqola Talablari"
          />
        </a>
      </div>
    </div>
  );
}
