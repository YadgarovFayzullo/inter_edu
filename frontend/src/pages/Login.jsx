import React, { useState } from "react";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      "Form submitted! Name:",
      name,
      "Email:",
      email,
      "Password:",
      password
    );

    setName("");
    setEmail("");
    setPassword("");
  };
  
  return (
    <div className="flex flex-col items-center justify-center pt-24 md:min-h-screen py-2">
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-sky-100 focus:border-blue-700"
              id="email"
              type="email"
              name="email"
              placeholder="Введите адрес электронной почты"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 ">
              Пароль
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:bg-sky-100 focus:border-blue-700"
              id="password"
              type="password"
              name="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
