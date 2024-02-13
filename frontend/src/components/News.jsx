import React from "react";
import { useTranslation } from "react-i18next";

export default function News() {
  const { t } = useTranslation();
  return (
    <section className="py-10 mb-5">
      <div className="text-center">
        <h1 className="text-[40px] font-medium">{t("news")}</h1>
      </div>
      <div className="lg:flex mt-12 max-w-[90%] pl-12 md:pl-0 md:max-w-full">
        <a
          href="https://t.me/IEandGS"
          className="ml-5 mr-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl lg:justify-around lg:shadow-lg hover:shadow-2xl duration-200"
        >
          <img
            className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/IE&GS7.png"
            alt=""
          />
          <div className="flex flex-col justify-between p-2 leading-normal">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Прием на новый выпуск
            </h2>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Продолжается прием материалов для нового выпуска журнала. Мы
              оцениваем оригинальность, актуальность и научную значимость
              предлагаемых материалов. Благодарим вас за вашу заинтересованность
              и участие!
            </p>
          </div>
        </a>
        <br />
        <a
          href="https://t.me/IEandGS"
          className="ml-5 mr-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl lg:justify-around lg:shadow-lg hover:shadow-2xl duration-200"
        >
          <img
            className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/mainbook.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-2 leading-normal">
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">
              Ознокомтесь правилами
            </h2>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Пожалуйста, убедитесь, что ваша
              статья соответствует требованиям для подачи материалов.Благодарим
              вас за вашу заинтересованность и участие!
            </p>
          </div>
        </a>
        <br />
        <a className="ml-5 mr-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-lg:justify-around lg:shadow-lg hover:shadow-2xl duration-200">
          <img
            className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/growing.png"
            alt=""
          />
          <div className="flex flex-col justify-between p-2 leading-normal">
            <div className="mb-5 w-full">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Статистика
              </h2>
            </div>
            <p className="mb-20 font-normal text-gray-700 dark:text-gray-400">
              За месяц наш сайт был просмотрен более 5 тысяч раз со всего мира.
              Следите за нами чтобы не пропускать новости
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
