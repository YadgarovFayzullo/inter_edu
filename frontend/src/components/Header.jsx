import React from "react";
import VideoBg from "./videoBg.mp4"
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="overflow-x-hidden bg-fixed">
        <video
          src={VideoBg}
          type="videBg.mp4"
          loop
          autoPlay
          muted
          className="bg-[url('/videoBg.mp4')] object-cover absolute h-screen w-screen -z-10 left-0"
        ></video>
        <div className="w-[80%] h-screen text-black py-20 font-Header lg:px-24 lg:py-44">
          <div className="text-white mt-[22%] ml-7 lg:mt-1">
            <span className="text-5xl lg:text-8xl">
              INSPIRATION FOR <br />
              THE <br />
              MODERN <br />
              RESEARCHER <br />
            </span>
          </div>
        </div>
        <div className="first-body">
          <div className="just-body">
            <div className="scroll-downs">
              <div className="mousey">
                <div className="scroller"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
