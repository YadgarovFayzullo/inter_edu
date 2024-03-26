import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

export default function AdminPartners() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState("");

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
    };
    setNewsList([...newsList, newsItem]);

    setTitle("");
    setText("");
    setImage(null);
    setError("");
  };

  const deletePartners = (id) => {
    setNewsList(newsList.filter((item) => item.id !== id));
  };

  return (
    <div className="flex h-screen md:pl-64">
      <Sidebar />
      <div className="flex-1 p-0 flex flex-col items-start">
        <div className="bg-white p-6 rounded-lg w-full mb-4">
          <h2 className="text-2xl font-semibold mb-4">ПАРТНЕРЫ</h2>
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
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={addNews}
            >
              Добавить партнера
            </button>
          </form>
        </div>
        <h3 className="text-xl font-semibold pl-4">История действий</h3>
        <div className="max-w-lg w-full pl-3">
          {newsList.map((newsItem) => (
            <div
              key={newsItem.id}
              className="bg-white p-4 mb-4 rounded-lg shadow-md w-full flex items-center"
            >
              {newsItem.image && (
                <img
                  src={URL.createObjectURL(newsItem.image)}
                  alt="Partner Image"
                  className="w-[50%] h-auto rounded-md mr-4"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold mb-2">{newsItem.title}</h3>
                <p className="text-gray-700 mb-2">{newsItem.text}</p>
                <div className="flex">
                  <button
                    className="text-red-500 hover:text-red-700 font-semibold mr-2"
                    onClick={() => deletePartners(newsItem.id)}
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
