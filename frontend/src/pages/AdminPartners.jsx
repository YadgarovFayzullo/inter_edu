import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function AdminPartners() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [newsList, setNewsList] = useState([]);
  const [titleError, setTitleError] = useState("");
  const [textError, setTextError] = useState("");
  const [imageError, setImageError] = useState("");
  const [date, setDate] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const addPartners = () => {
    let titleErrorText = "";
    let textErrorText = "";
    let imageErrorText = "";

    if (!title) {
      titleErrorText = "Пожалуйста, заполните заголовок";
    }

    if (!text) {
      textErrorText = "Пожалуйста, заполните описание";
    }

    if (!image) {
      imageErrorText = "Пожалуйста, загрузите изображение";
    }

    setTitleError(titleErrorText);
    setTextError(textErrorText);
    setImageError(imageErrorText);

    if (title && text && image) {
      const newsItem = {
        id: Date.now(),
        title: title,
        text: text,
        image: image,
        date: date,
      };

      setNewsList([...newsList, newsItem]);

      setTitle("");
      setText("");
      setImage(null);
      setDate(new Date().toISOString().split("T")[0]);

      // Reset errors
      setTitleError("");
      setTextError("");
      setImageError("");
    }
  };

  const deletePartners = (id) => {
    setNewsList(newsList.filter((item) => item.id !== id));
  };

  return (
    <div className="flex h-screen md:pl-64">
      <Sidebar />
      <div className="flex-1 p-0 flex flex-col items-start">
        <div className="bg-white p-6 rounded-lg w-full mb-4">
          <h1 className="text-2xl font-semibold mb-4 font-Arimo text-blue-500">
            ПАРТНЕРЫ
          </h1>
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
                onChange={(e) => {
                  setTitle(e.target.value);
                  setTitleError(""); // Reset error when changing title
                }}
              />
              {titleError && <p className="text-red-500">{titleError}</p>}
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
                onChange={(e) => {
                  setText(e.target.value);
                  setTextError(""); // Reset error when changing text
                }}
              ></textarea>
              {textError && <p className="text-red-500">{textError}</p>}
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
                onChange={(e) => {
                  handleImageUpload(e);
                  setImageError(""); // Reset error when changing image
                }}
              />
              {imageError && <p className="text-red-500">{imageError}</p>}
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={addPartners}
            >
              Добавить партнера
            </button>
          </form>
        </div>
        <h3 className="text-xl font-semibold pl-6">История действий</h3>
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
                  className="w-[20%] h-auto rounded-md mr-4"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold mb-2 ">
                  {newsItem.title}
                </h3>
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
