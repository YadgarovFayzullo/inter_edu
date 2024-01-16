import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Partners from "./Partners"
import SecondFooter from "./SecondFooter";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEn from "./locale/en/translationEn.json";
import translationsRu from "./locale/ru/translationsRu.json";
import translationsUz from "./locale/uz/translationsUz.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationsRu },
    en: { translation: translationsEn },
    uz: { translation: translationsUz },
  },
  lng: "ru",
  fallbackLng: "ru",
});

export default function Layout({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "ru"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div>
      <Navbar changeLang={setLanguage} />
      {children}
      <SecondFooter />
      <Footer />
    </div>
  );
}
