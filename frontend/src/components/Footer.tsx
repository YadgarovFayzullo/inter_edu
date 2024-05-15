import React from "react";
import { useTranslation } from "react-i18next";
import { BsTelegram } from "react-icons/bs";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="font-Montserrat">
      <div className="bg-slate-950 text-sm">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-300 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <h3 className="font-bold text-xl text-gray-500">IE&GS</h3>
          </div>
          <div className="p-5">
            <div className="text-gray-500 inline-block text-2xl pb-4 mb-4 border-b-4 border-amber-500">
              {t("redaction-footer")}
            </div>
            <h4 className="my-3 block">{t("loc-target")}</h4>
            <h4 className="my-3 block">{t("email-target")}</h4>
            <h4 className="my-3 block">{t("phone-target")}</h4>
          </div>
          <div className="p-5">
            <div className="inline-block text-2xl pb-4 mb-4 border-b-4 border-amber-500 text-gray-500">
              {t("main-footer")}
            </div>
            <h4 className="my-3 block">{t("footer-inst")}</h4>
            <h4 className="my-3 block">{t("institute-address")}</h4>
            <h4 className="my-3 block">{t("footer-phone")}</h4>
            <a
              className="hover:text-amber-400"
              target="_blank"
              rel="noopener noreferrer"
              href="https://buxdpi.uz"
            >
              buxdpi.uz
            </a>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
            >
              <img
                className="w-[30%] md:w-[20%] lg:w-[20%]"
                src="cc-license.png"
                alt="cc license"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/IEandGS"
              className="w-6 mx-1 hover:text-gray-400"
            >
              <BsTelegram size={25} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/intereduglobalstudy/"
              className="w-6 mx-1 hover:text-gray-400"
            >
              <FaInstagram size={25} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/IEandGS"
              className="w-6 mx-1 hover:text-gray-400"
            >
              <FaFacebook size={25} />
            </a>
          </div>
          <div className="my-5 text-gray-400">
            © {new Date().getFullYear()}. {t("all-rights-reserved")}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
