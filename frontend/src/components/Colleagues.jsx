import React from "react";
import { useTranslation } from "react-i18next";

export default function Colleagues() {
  const { t } = useTranslation();
  return (
    <div className="container flex justify-around">
      <div className="mt-28 pl-6 lg:ml-5">
        <h1>
          <strong>{t("main-red")}</strong> {t("name-red")}
          <br />
          <strong>{t("main-preds")}</strong>
          {t("name-preds")}
        </h1>
        <div className="font-bold text-xl ml-[30px] mt-16 mb-12 md:ml-[300px] lg:ml-[49%]">
          {t("tahrir-hayati")}
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
