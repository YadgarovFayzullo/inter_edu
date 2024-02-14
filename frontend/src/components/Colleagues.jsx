import React from "react";
import { useTranslation } from "react-i18next";

export default function Colleagues() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center">
      <div className="mt-24 pl-1 lg:ml-2">
        <h1>
          <strong>{t("main-red")}</strong> {t("name-red")}
          <br />
          <strong>{t("main-preds")}</strong>
          {t("name-preds")}
        </h1>
        <div className="flex justify-center pt-5 pb-5">
          <div className="font-bold text-lg text-center lg:text-xl">
            {t("tahrir-hayati")}
          </div>
        </div>

        <div>{t("tahrir-secondnames")}</div>
        <p className="mb-6 md:mt-[20px]">
          <strong className="text-bold"> {t("masul-kotib")} </strong>
          {t("masul-name")}
          <br />
          {t("masul-ped")}
        </p>
      </div>
    </div>
  );
}
