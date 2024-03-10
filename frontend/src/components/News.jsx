import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function NewsSection() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const newsItems = [
    {
      title: "Прием на новый выпуск",
      description:
        "Продолжается прием материалов для нового выпуска журнала. Мы оцениваем оригинальность, актуальность и научную значимость предлагаемых материалов. Благодарим вас за вашу заинтересованность и участие!",
      imageUrl: "/Book8.png",
      link: "https://t.me/IEandGS",
    },
    {
      title: "Конкурс на лучшую статью",
      description:
        "Конкурс для статей объявленных 2024 году во втором выпуске. Правила участия и призы скоро будут объявлены. Следите за нами.",
      imageUrl: "/news-2024.png",
      link: "https://t.me/IEandGS",
    },
    {
      title: "Ознокомтесь правилами",
      description:
        "Пожалуйста, убедитесь, что ваша статья соответствует требованиям для подачи материалов. Благодарим вас за вашу заинтересованность и участие!",
      imageUrl: "/mainbook.jpg",
      link: "https://t.me/IEandGS",
    },
    {
      title: "Статистика",
      description:
        "За месяц наш сайт был просмотрен более 5 тысяч раз со всего мира. Следите за нами чтобы не пропускать новости",
      imageUrl: "/growing.png",
    },
  ];

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="py-10 mb-5">
      <div className="text-center">
        <h1 className="text-[40px] font-medium">{t("news")}</h1>
      </div>
      <div className="flex lg:justify-around justify-between gap-7 flex-wrap mt-12 max-w-[90%] pl-12 md:pl-0 md:max-w-full">
        {currentItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="ml-5 mr-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl lg:justify-around lg:shadow-lg hover:shadow-xl duration-200"
          >
            <img
              className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={item.imageUrl}
              alt=""
            />
            <div className="flex flex-col justify-between p-2 leading-normal">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {item.title}
              </h2>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-5">
        {Array.from({ length: Math.ceil(newsItems.length / itemsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              className={`mx-2 px-4 py-2 border border-gray-200 rounded-full ${
                currentPage === index + 1
                  ? "bg-amber-400 text-white"
                  : "bg-white text-amber-400"
              } transition-colors duration-300 hover:bg-amber-400 hover:text-white`}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </section>
  );
}

export default NewsSection;
