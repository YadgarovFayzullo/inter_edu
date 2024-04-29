// import React, { useState, useEffect } from "react";
// import Sidebar from "../components/Sidebar";
// import { Helmet } from "react-helmet";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function AdminNews() {
//   const [title, setTitle] = useState("");
//   const [text, setText] = useState("");
//   const [imagePath, setImagePath] = useState(null);
//   const [date, setDate] = useState("");
//   const [newsList, setNewsList] = useState([]);
//   const [titleError, setTitleError] = useState("");
//   const [textError, setTextError] = useState("");
//   const [imageError, setImageError] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/login");
//     }
//   }, [navigate]);

//   useEffect(() => {
//     const currentDate = new Date().toISOString().split("T")[0];
//     setDate(currentDate);

//     const storedNews = JSON.parse(localStorage.getItem("newsList"));
//     if (storedNews) {
//       setNewsList(storedNews);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("newsList", JSON.stringify(newsList));
//   }, [newsList]);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     setImagePath(file);
//   };

//   //ADD NEWS
//   const addNews = async () => {
//     let titleErrorText = "";
//     let textErrorText = "";
//     let imageErrorText = "";

//     if (!title) {
//       titleErrorText = "Введите загаловок";
//     }

//     if (!text) {
//       textErrorText = "Введите описание";
//     }

//     if (!imagePath) {
//       imageErrorText = "Загрузите изоброжение";
//     }

//     setTitleError(titleErrorText);
//     setTextError(textErrorText);
//     setImageError(imageErrorText);

//     const dateObj = new Date(date);

//     if (title && text && imagePath) {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("text", text);
//       formData.append("date", dateObj.toISOString());
//       // formData.append("image", imagePath);

//       try {
//         const token = localStorage.getItem("token");

//         const response = await axios.post(
//           "http://localhost:3000/news",
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         console.log("News added successfully:");
//         setNewsList([...newsList, response.data]);

//         setTitle("");
//         setText("");
//         setImagePath(null);
//         setDate(new Date().toISOString().split("T")[0]);

//         setTitleError("");
//         setTextError("");
//         setImageError("");
//       } catch (error) {
//         console.log("error adding news", error);
//       }
//     }
//   };

//   //DELETE NEWS
//   const deleteNews = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(`http://localhost:3000/news?id=${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setNewsList((prevNewsList) =>
//         prevNewsList.filter((item) => item._id !== id)
//       );
//     } catch (error) {
//       console.error("Error deleting news:", error);
//     }
//   };

//   return (
//     <div className="flex h-screen md:pl-64">
//       <Helmet>
//         <title>Новости</title>
//       </Helmet>
//       <Sidebar />
//       <div className="flex-1 p-0 flex flex-col items-start">
//         <div className="bg-white p-6 rounded-lg w-full mb-4">
//           <h1 className="text-2xl font-semibold mb-4 font-Arimo text-blue-500">
//             НОВОСТИ
//           </h1>
//           <form>
//             <div className="mb-4">
//               <label
//                 htmlFor="title"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Заголовок
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 id="title"
//                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
//                 placeholder="Введите заголовок"
//                 value={title}
//                 onChange={(e) => {
//                   setTitle(e.target.value);
//                   setTitleError("");
//                 }}
//               />
//               {titleError && <p className="text-red-500">{titleError}</p>}
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="text"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Описание
//               </label>
//               <textarea
//                 id="text"
//                 name="text"
//                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
//                 placeholder="Введите описание"
//                 rows="4"
//                 value={text}
//                 onChange={(e) => {
//                   setText(e.target.value);
//                   setTextError("");
//                 }}
//               ></textarea>
//               {textError && <p className="text-red-500">{textError}</p>}
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="image"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Загрузить изображение
//               </label>
//               <input
//                 type="file"
//                 name="file"
//                 id="image"
//                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
//                 accept="image/*"
//                 onChange={(e) => {
//                   handleImageUpload(e);
//                   setImageError("");
//                 }}
//               />
//               {imageError && <p className="text-red-500">{imageError}</p>}
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="date"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Дата
//               </label>
//               <input
//                 type="date"
//                 name="date"
//                 id="date"
//                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
//                 value={date}
//                 onChange={(e) => {
//                   setDate(e.target.value);
//                 }}
//               />
//             </div>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="button"
//               onClick={addNews}
//             >
//               Добавить новость
//             </button>
//           </form>
//         </div>
//         <h3 className="text-xl font-semibold pl-6">История действий</h3>
//         <div className="max-w-lg w-full">
//           {newsList.map((newsItem) => (
//             <div
//               key={newsItem._id}
//               className="bg-white p-4 mb-4  w-full flex items-center"
//             >
//               <div>
//                 <h3 className="text-lg font-semibold mb-2">{newsItem.title}</h3>
//                 <p className="text-gray-700 mb-2">{newsItem.text}</p>
//                 {newsItem.date && (
//                   <p className="text-gray-600 mb-2">
//                     Дата:{" "}
//                     {new Date(newsItem.date).toLocaleDateString("ru-RU", {
//                       day: "2-digit",
//                       month: "2-digit",
//                       year: "2-digit",
//                     })}
//                   </p>
//                 )}
//                 <div className="mt-2">
//                   <button
//                     className="text-red-500 hover:text-red-700 font-semibold mr-2"
//                     onClick={() => {
//                       console.log("Deleting news item with ID:", newsItem._id);
//                       deleteNews(newsItem._id);
//                     }}
//                   >
//                     Удалить
//                   </button>
//                   <button className="text-blue-500 hover:text-blue-700 font-semibold">
//                     Редактировать
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
