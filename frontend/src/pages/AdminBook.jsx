import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Helmet } from "react-helmet";

export default function AdminBook() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [imageList, setImageList] = useState([]);

  
  return (
    <div className="flex h-screen md:pl-64">
      <Helmet>
        <title>Обложка</title>
      </Helmet>
      <Sidebar />
      <div className="flex-1 p-0 flex flex-col items-start">
        <div className="bg-white p-6 rounded-lg w-full mb-4">
          <h1 className="text-2xl font-semibold mb-4 font-Arimo text-blue-500">
            ОБЛОЖКА
          </h1>
          <form>
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
              onClick={addBook}
            >
              Добавить обложку
            </button>
          </form>
        </div>
        <h3 className="text-xl font-semibold pl-6">История действий</h3>
        <div className="max-w-lg w-full pl-3">
          {imageList.map((bookItem) => (
            <div
              key={bookItem.id}
              className="bg-white p-4 mb-4 rounded-lg shadow-md w-full flex items-center"
            >
              {bookItem.image && (
                <img
                  src={URL.createObjectURL(bookItem.image)}
                  alt="Book Cover"
                  className="w-[20%] h-auto rounded-md mr-4"
                />
              )}
              <div>
                <div className="flex">
                  <button
                    className="text-red-500 hover:text-red-700 font-semibold mr-2"
                    onClick={() => deleteBook(bookItem.id)}
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
