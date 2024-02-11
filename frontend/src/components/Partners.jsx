import React from "react";
import { useTranslation } from "react-i18next";

export default function Partners() {
  const { t } = useTranslation();
  return (
    <div className="mb-24 mt-24">
      <div className="mb-24 text-center">
        <h1 className="text-4xl font-bold">{t("partners")}</h1>
      </div>
      <div>
        <a
          href="https://play.google.com/store/apps/details?id=com.NodirYodgorov.ARProjection"
          className="ml-10 mr-10 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl lg:justify-around lg:shadow-sm hover:shadow-md duration-200"
        >
          <img
            className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/partner1.jpeg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              AR Projection
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {t("AR")}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
