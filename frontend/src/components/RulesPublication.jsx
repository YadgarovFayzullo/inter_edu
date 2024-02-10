import React from "react";
import { useTranslation } from "react-i18next";

export default function RulesPublication() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="mt-28 mb-5 ml-7 mr-4 sm:mb-6">
        <h1 className="mb-2 font-bold md:mb-2 flex justify-center">{t("info-journal")}</h1>
        <h1>{t("journal-text")}</h1>
        <h1 className="font-bold flex justify-center mt-4 mb-2 md:mt-7 md:mb-2 lg:mt-5 lg:mb-5">{t("rules-doc")}</h1>
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
          <li>{t("doc-site")}
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
            > iegs-scientificjournal.vercel.app
            </a>
          </li>
          <li>{t("doc-send")}</li>
        </ul>
        <br />
        <br />
      </h1>
      <div className="bg-[#f2f4fb] py-2">
        <h1 className="ml-[90px] text-md sm:items-center md:ml-[650px] md:text-2xl lg:text-xl">
          {t("public-rules")}
        </h1>
        <a href="./maqola_talablari.pdf" target="_blank">
          <img
            className="w-[30%] ml-[120px] mb-12 mt-6 md:ml-[635px] lg:shadow-xl lg:hover:shadow-2xl lg:duration-200 sm:w-[20%] md:w-[15%]"
            src="./talab.png"
            alt="Maqola Talablari"
          />
        </a>
      </div>
    </div>
  );
}
