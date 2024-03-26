import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

export default function AdminNews() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [date, setDate] = useState("");
  const [view, setView] = useState(0);
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setDate(currentDate);

    setView((prevView) => prevView + 1);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const addNews = () => {
    if (!title || !text || !image) {
      setError("Пожалуйста,загрузите фото,заполните загаловок и описание");
      return;
    }

    const newsItem = {
      id: Date.now(),
      title: title,
      text: text,
      image: image,
      date: date,
      view: view,
    };
    setNewsList([...newsList, newsItem]);

    setTitle("");
    setText("");
    setImage(null);
    const currentDate = new Date().toISOString().split("T")[0];
    setDate(currentDate);
    setView(0);
    setError("");
  };

  const deleteNews = (id) => {
    setNewsList(newsList.filter((item) => item.id !== id));
  };

  return (
    <div className="flex h-screen md:pl-64">
      <Sidebar />
      <div className="flex-1 p-0 flex flex-col items-start">
        <div className="bg-white p-6 rounded-lg w-full mb-4">
          <h2 className="text-2xl font-semibold mb-4">НОВОСТИ</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Заголовок
              </label>
              <input
                type="text"
                id="title"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Введите заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="text"
                className="block text-gray-700 font-bold mb-2"
              >
                Описание
              </label>
              <textarea
                id="text"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Введите описание"
                rows="4"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-gray-700 font-bold mb-2"
              >
                Загрузить изображение
              </label>
              <input
                type="file"
                id="image"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-gray-700 font-bold mb-2"
              >
                Дата
              </label>
              <input
                type="date"
                id="date"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                value={date}
                onChange={(e) => {
                  const inputDate = e.target.value;
                  const formattedDate = inputDate
                    .split("-")
                    .reverse()
                    .join(".");
                  setDate(formattedDate);
                }}
              />
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={addNews}
            >
              Добавить новость
            </button>
          </form>
        </div>
        <h1 className="text-2xl font-semibold pl-5">История Действий</h1>
        <div className="max-w-lg w-full">
          {newsList.map((newsItem) => (
            <div
              key={newsItem.id}
              className="bg-white p-4 mb-4 rounded-lg shadow-md w-full flex items-center"
            >
              {newsItem.image && (
                <img
                  src={URL.createObjectURL(newsItem.image)}
                  alt="News Image"
                  className="w-[40%] h-auto rounded-md mr-4"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold mb-2">{newsItem.title}</h3>
                <p className="text-gray-700 mb-2">{newsItem.text}</p>
                <p className="text-gray-600 mb-2">
                  Дата: {newsItem.date.split("-").reverse().join(".")}
                </p>
                <div className="mt-2">
                  <button
                    className="text-red-500 hover:text-red-700 font-semibold mr-2"
                    onClick={() => deleteNews(newsItem.id)}
                  >
                    Удалить
                  </button>
                  <button className="text-blue-500 hover:text-blue-700 font-semibold">
                    Редактировать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
