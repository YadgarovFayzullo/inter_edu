import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRegEye } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import axios from "axios";

export default function News() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:3000/news");
        setNewsItems(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="py-10 mb-5 flex flex-col justify-around font-Montserrat">
      <div className="text-center">
        <h1 className="text-[40px]">{t("news")}</h1>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-row gap-10 md:gap-28 md:justify-around flex-wrap mt-12 max-w-[70%] md:max-w-full">
          {currentItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl lg:justify-around lg:shadow-lg hover:shadow-xl duration-200"
            >
              <img
                className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={item.imagePath}
                alt="image"
              />
              <div className="flex flex-col justify-between p-2 leading-normal">
                <h2   className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                  {item.title}
                </h2>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.text}
                </p>
                {/* <div className="flex gap-12">
                  <p>
                    <FaRegEye />
                  </p>
                  <p>
                    <CiCalendar />
                  </p>
                </div> */}
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-5">
        {Array.from({ length: Math.ceil(newsItems.length / itemsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              className={`mx-2 px-4 py-2 border border-gray-200 rounded-full ${
                currentPage === index + 1
                  ? "bg-[#f0582f] text-white"
                  : "bg-white text-[#f0582f]"
              } transition-colors duration-300 hover:bg-[#f0582f] hover:text-white`}
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
