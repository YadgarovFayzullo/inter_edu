import React from "react";
import { useTranslation } from "react-i18next";

export default function News() {
  const {t} = useTranslation()
  return (
    <section className="py-10 mb-5">
      <div className="text-center">
        <h1 className="text-[40px] font-medium">{t('news')}</h1>
      </div>
      <div className="lg:flex mt-12">
        <a
          href="https://t.me/IEandGS"
          class="ml-5 mr-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl lg:justify-around lg:shadow-lg hover:shadow-2xl duration-200"
        >
          <img
            class="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/book2.png"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Прием на январь
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Продолжается прием материалов для нового выпуска журнала. Мы
              оцениваем оригинальность, <br /> актуальность и научную значимость
              предлагаемых материалов. Благодарим вас за вашу заинтересованность
              и участие!
            </p>
          </div>
        </a>
        <br />
        <a
          href="https://t.me/IEandGS"
          class="ml-5 mr-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl lg:justify-around lg:shadow-lg hover:shadow-2xl duration-200"
        >
          <img
            class="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/mainbook.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-3 text-2xl font-bold tracking-tight text-gray-900">
              Идет акция
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Идет акция на 5-выпуск журнала.Пожалуйста, убедитесь, что ваша{" "}
              <br />
              статья соответствует требованиям для подачи материалов.Благодарим
              вас за вашу заинтересованность и участие!
            </p>
          </div>
        </a>
        <br />
        <a
          class="ml-5 mr-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xllg:justify-around lg:shadow-lg hover:shadow-2xl duration-200"
        >
          <img
            class="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/stat.png"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
           <div className="mb-5 w-full">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Статистика
            </h5>
            </div>
            <p class="mb-20 font-normal text-gray-700 dark:text-gray-400">
              За месяц наш сайт был просмотрен более 500 раз со всего мира.
              Следите за нами чтобы не пропускать новости
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
