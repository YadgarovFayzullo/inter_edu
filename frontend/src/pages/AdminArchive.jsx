import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Helmet } from "react-helmet";

export default function AdminArchive() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedYear, setSelectedYear] = useState("");
  const [yearError, setYearError] = useState("");
  const [fileError, setFileError] = useState("");
  const [newsList, setNewsList] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);

    setFileError("");
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);

    setYearError("");
  };

  const addArchive = async () => {
    let yearErrorText = "";
    let fileErrorText = "";

    if (!selectedYear) {
      yearErrorText = "Пожалуйста, выберите год";
    }

    if (!selectedFile) {
      fileErrorText = "Пожалуйста, выберите файл";
    }

    setYearError(yearErrorText);
    setFileError(fileErrorText);

    if (selectedYear && selectedFile) {
      try {
        const formData = new FormData();
        formData.append("year", selectedYear);
        formData.append("file", selectedFile);

        const response = await axios.post(
          "http://127.0.0.1:3000/archive",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Archive added successfully:", response.data);

        const adminItem = {
          year: selectedYear,
          name: selectedFile.name,
        };

        setNewsList([...newsList, adminItem]);
        setSelectedYear("");
        setSelectedFile(null);
        setYearError("");
        setFileError("");
      } catch (error) {
        console.error("Error adding archive:", error);
      }
    }
  };
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
          <div className="flex flex-col mb-4">
            <select
              value={selectedYear}
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
            onChange={handleFileChange}
            accept=".pdf"
            className="mb-4"
          />
          {selectedFile && (
            <p className="mb-4">Выбранный файл: {selectedFile.name}</p>
          )}
          {fileError && <p className="text-red-500">{fileError}
          </p>
          }
          <button
            onClick={addArchive}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-44 h-9 rounded focus:outline-none focus:shadow-outline"
          >
            Добавить материал
          </button>
          <h3 className="text-xl font-semibold pt-5">История действий</h3>
          <div>
            {newsList.map((item, index) => (
              <div key={index}>
                <p className="font-semibold pt-3 text-blue-600">{item.year}</p>
                <p className="text-gray-800">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
