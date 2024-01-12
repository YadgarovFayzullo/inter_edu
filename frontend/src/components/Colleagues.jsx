import React from "react";
import { useTranslation } from "react-i18next";

export default function Colleagues() {
  const { t } = useTranslation();
  return (
    <div className="container flex justify-around">
      <h1 className="mt-28 pl-6 lg:ml-5">
        <strong>{t("main-red")}</strong> {t("name-red")}
        <br />
        <strong>{t("main-preds")}</strong>
        {t("name-preds")}
        <br />
        <h1 className="font-bold text-xl ml-[30%] mt-16 mb-12 lg:ml-[49%]">
          {t("tahrir-hayati")}
        </h1>
        <h1>{t("tahrir-secondnames")}</h1>
        <br />
        <p className="mb-6">
          <strong className="text-bold"> {t("masul-kotib")} </strong>
          {t("masul-name")}
          <br />
          {t("masul-ped")}
        </p>
      </h1>
    </div>
  );
}
