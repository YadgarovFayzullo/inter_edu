import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Helmet } from "react-helmet";
// import axios from "axios";

export default function AdminArchive() {
  const [filePath, setFilePath] = useState(null);
  const [releaseYear, setReleaseYear] = useState("");
  const [yearError, setYearError] = useState("");
  const [fileError, setFileError] = useState("");
  const [newsList, setNewsList] = useState([]);
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  // const handleFileChange = (event) => {
  //   setFilePath(event.target.files[0]);
  //   setFileError("");
  // };

  // const handleYearChange = (event) => {
  //   setReleaseYear(event.target.value);
  //   setYearError("");
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   let yearErrorText = "";
  //   let fileErrorText = "";
  //   let titleErrorText = "";

  //   if (!releaseYear) {
  //     yearErrorText = "Пожалуйста, выберите год";
  //   }

  //   if (!filePath) {
  //     fileErrorText = "Пожалуйста, выберите файл";
  //   }

  //   if (!title) {
  //     titleErrorText = "Пожалуйста, заполните поле";
  //   }

  //   setYearError(yearErrorText);
  //   setFileError(fileErrorText);
  //   setTitleError(titleErrorText);

  //   if (releaseYear && filePath) {
  //     const formData = new FormData();
  //     formData.append("releaseYear", releaseYear);
  //     formData.append("file", filePath);

  //     try {
  //       const token = localStorage.getItem("token");
  //       const response = await axios.post(
  //         "http://localhost:3000/archive",
  //         formData,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       console.log("Archive added successfully:", response.data);

  //       const archiveItem = {
  //         year: releaseYear,
  //         name: title,
  //       };

  //       setNewsList([...newsList, archiveItem]);
  //       setReleaseYear("");
  //       setFilePath(null);
  //       setYearError("");
  //       setFileError("");
  //     } catch (error) {
  //       console.error("Error adding archive:", error);
  //     }
  //   }
  // };

  // const deleteBook = async (id) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     await axios.delete(`http://localhost:3000/?id=$archive{id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     setNewsList((prevNewsList) =>
  //       prevNewsList.filter((item) => item.id !== id)
  //     );
  //   } catch (error) {
  //     console.error("Error deleting book:", error);
  //   }
  // };

  return (
    <div className="flex h-screen md:pl-64">
      <Helmet>
        <title>Архив</title>
      </Helmet>
      <Sidebar />
      <div className="flex-1 p-0 flex flex-col items-start ">
        <div className="bg-white p-6 rounded-lg w-full mb-8 flex flex-col">
          <h1 className="text-2xl font-semibold mb-4 font-Arimo text-blue-500">
            АРХИВ
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <select
                id="releaseYear"
                name="releaseYear"
                value={releaseYear}
                onChange={handleYearChange}
                className="w-32 border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="">Год</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
              {yearError && <p className="text-red-500">{yearError}</p>}
            </div>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              accept=".pdf"
              className="mb-4"
            />
            {fileError && <p className="text-red-500">{fileError}</p>}
            {/* <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-semibold   mb-2"
              >
                Переименуйте файл:
              </label>
              <input
                type="text"
                id="title"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Введите название"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setTitleError("");
                }}
              />
              {titleError && <p className="text-red-500">{titleError}</p>}
            </div> */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-44 h-9 rounded focus:outline-none focus:shadow-outline"
            >
              Добавить материал
            </button>
          </form>
          <h3 className="text-xl font-semibold pt-5">История действий</h3>
          <div>
            {newsList.map((item, index) => (
              <div key={index}>
                <p className="font-semibold pt-3 text-blue-600">{item.year}</p>
                <p className="text-gray-800">{item.name}</p>
                <div>
                  <button
                    className="text-red-500 hover:text-red-700 font-semibold mr-2"
                    onClick={() => deleteBook(item.year)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
