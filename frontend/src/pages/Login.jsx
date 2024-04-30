import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
export default function Registration() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userPasswordError, setUserPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let userPasswordError = "";

    if (!name || password) {
      userPasswordError = "Введите имя пользователя или пароль";
    }

    setUserPasswordError(userPasswordError);

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        username: name,
        password: password,
      });

      const token = response.data.access_token;
      localStorage.setItem("token", token);
      console.log("Registered successfully", response.data);

      navigate("/admin");
      setName("");
      setPassword("");
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("Error registering", error.response.data);
      } else {
        console.log("Error", error.message);
      }
    }
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-24 md:min-h-screen py-2 font-Montserrat">
      <Helmet>
        <title>Вход в личый кабинет</title>
      </Helmet>
      <div className="bg-white md:shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-4 text-center">Вход</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Имя пользователя
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-sky-100 focus:border-blue-700"
              id="username"
              type="text"
              name="username"
              placeholder="Введите имя пользователя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Пароль
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:bg-sky-100 focus:border-blue-700"
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {userPasswordError && (
                <p className="text-red-500">{userPasswordError}</p>
              )}
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <FaRegEye
                    className="flex justify-center items-end"
                    size={20}
                  />
                ) : (
                  <FaRegEyeSlash className="mb-3" size={20} />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-36 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
