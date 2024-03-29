import React from "react";

export default function Officials() {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-[60%] md:w-[25%]">
          <a href="https://scholar.google.com/citations?user=M73-aO8AAAAJ&hl=ru">
            <img
              className="w-full"
              src="/google_scolar.png"
              alt="google_scholar"
            />
          </a>
        </div>
        <div className="w-[60%] md:w-[25%]">
          <a href="https://cyberleninka.ru/journal/n/inter-education-global-study?i=1132543">
            <img
              className="w-full"
              src="/cyberleninka.png"
              alt="cyberleninka"
            />
          </a>
        </div>
        <div className="w-[60%] md:w-[20%]">
          <a>
            <img className="w-full" src="/anti_plag.png" alt="anti_plag" />
          </a>
        </div>
        <div className="w-[41%] md:w-[10%]">
          <a>
            <img className="w-full" src="/DOI_logo.svg.png" alt="doi" />
          </a>
        </div>
      </div>
    </div>
  );
}
