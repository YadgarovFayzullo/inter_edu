import React from "react";

export default function Book() {
  return (
    <div className="mt-40 ml-5 w-auto h-auto lg:mb-12">
      <div className="lg:flex lg:justify-around lg:mb-16">
        <div className="w-[75%] pl-12 lg:w-[55%]">
          <img
            className="shadow-lg rounded-lg lg:justify-around lg:shadow-lg hover:shadow-2xl duration-200 lg:ml-40"
            src="/mainbook.jpg"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-sm mt-5 mr-16 ml-5 mb-4 sm:mr-24 md:justify-items-end md:mt-[5%] sm:ml-[5%] md:ml-[30%] md:mr-[25%] lg:text-md lg:text-gray-500">
            Журнал предоставляет возможность преподавателям, магистрантам,
            исследователям и студентам вузов, а также всем заинтересованным
            лицам публиковать свои научные статьи. Мы приветствуем статьи,
            содержащие основные научные результаты исследований в различных
            областях, включая педагогику, психологию, технику, искусствоведение,
            архитектуру, философию, историю и филологию. Также мы рады статьям,
            основанным на диссертационных работах кандидатов на ученые степени
            доктора философии (PhD) и доктора наук (DSc) в указанных областях.
            Наш журнал предлагает платформу для обмена научными исследованиями и
            стимулирует академическую деятельность в сфере современной науки.
          </p>
        </div>
      </div>
    </div>
  );
}
