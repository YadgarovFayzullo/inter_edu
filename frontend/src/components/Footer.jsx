import { useTranslation } from "react-i18next";
import { BsTelegram } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="bg-slate-950">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-300 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <h3 className="font-bold text-xl text-gray-500">IE&GS</h3>
          </div>
          <div className="p-5">
            <div className="text-gray-500 inline-block text-2xl pb-4 mb-4 border-b-4 border-amber-500">
              {t("about-main")}
            </div>
            <a
              className="my-3 block hover:text-amber-400 "
              href="https://t.me/IEandGS"
            >
              {t("about")}
            </a>
            <a
              className="my-3 block hover:text-amber-400 "
              href="https://t.me/IEandGS"
            >
              {t("price")}
            </a>
            <a
              className="my-3 block hover:text-amber-400 "
              href="https://t.me/IEandGS"
            >
              {t("contacts")}
            </a>
          </div>
          <div className="p-5">
            <div className="inline-block text-2xl pb-4 mb-4 border-b-4 border-amber-500 text-gray-500">
              Support
            </div>
            <a className="my-3 block hover:text-amber-400" href="/#">
              Help Center
            </a>
            <a className="my-3 block hover:text-amber-400" href="/#">
              Privacy Policy
            </a>
            <a className="my-3 block hover:text-amber-400" href="/#">
              Conditions
            </a>
          </div>
          <div className="p-5">
            <div className="inline-block text-2xl pb-4 mb-4 border-b-4 border-amber-500 text-gray-500">
              {t("connect")}
            </div>
            <a className="my-3 block">{t("loc-target")}</a>
            <a className="my-3 block">{t("email-target")}</a>
            <a className="my-3 block">{t("email-second")}</a>
            <a className="my-3 block">{t("phone-target")}</a>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a
              target="blank"
              href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
            >
              <img
                className="w-[30%] md:w-[20%] lg:w-[20%]"
                src="cc-license.png"
                alt="cc license"
              />
            </a>
            <a
              href="https://t.me/IEandGS"
              className="w-6 mx-1 hover:text-gray-400"
            >
              <BsTelegram size={25} />
            </a>
            <a
              href="https://t.me/IEandGS"
              className="w-6 mx-1 hover:text-gray-400"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="https://t.me/IEandGS"
              className="w-6 mx-1 hover:text-gray-400"
            >
              <FaFacebook size={25} />
            </a>
          </div>
          <div className="my-5 text-gray-400">
            © Copyright 2024. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
