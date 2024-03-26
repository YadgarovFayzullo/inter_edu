import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function AdminArchive() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedYear, setSelectedYear] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitting file to year:", selectedYear);
    console.log("Selected file:", selectedFile);
    // Logging similar to AdminNews
   
   
    console.log("Image:", selectedYear);

  };

  return (
    <div className="flex h-screen md:pl-64">
      <Sidebar />
      <div className="flex-1 p-0 flex flex-col items-start ">
        <div className="bg-white p-6 rounded-lg w-full mb-8 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">АРХИВ</h2>
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
          </div>
          <input type="file" onChange={handleFileChange} accept=".pdf" className="mb-4"/>
          {selectedFile && (
            <p className="mb-4">Выбранный файл: {selectedFile.name}</p>
          )}
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-44 h-9 rounded focus:outline-none focus:shadow-outline"
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
}
