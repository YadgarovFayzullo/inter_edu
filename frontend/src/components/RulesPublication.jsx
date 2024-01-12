import React from "react";
import { useTranslation } from "react-i18next";

export default function RulesPublication() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="mt-28 mb-9 ml-7 mr-4 sm:mb-6">
        <strong className="text-strong">{t("info-journal")}</strong>
        <br />
        <br />
        <h1>{t("journal-text")}</h1>
        <h1 className="font-bold lg:mt-5">{t("rules-doc")}</h1> <br />
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
              className="font-bold"
              href="https://iegs-scientificjournal.vercel.app"
            >
              {" "}
              iegs-scientificjournal.vercel.app
            </a>
          </li>
          <li>{t("doc-variant")}</li>
          <li>
            {t("doc-delete")}
            <a
              className="font-bold"
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
        <h1 className="ml-[45%] text-md sm:items-center md:text-2xl md:ml-[46%] lg:text-xl">
          {t("public-rules")}
        </h1>
        <a href="./maqola_talablari.pdf" target="_blank">
          <img
            className="w-[30%] ml-[45%] mb-12 mt-12 lg:shadow-xl lg:hover:shadow-2xl lg:duration-200 sm:w-[20%] md:w-[15%]"
            src="./talab.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
