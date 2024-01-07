import React from "react";

export default function Book() {
  return (
    <div className="mt-40 ml-5 w-auto h-auto lg:mb-12">
      <div className="lg:flex lg:justify-around lg:mb-16">
        <div className="w-[75%] pl-12 lg:w-[55%]">
          <img className="shadow-lg rounded-lg lg:justify-around lg:shadow-lg hover:shadow-2xl duration-200 lg:ml-40" src="/mainbook.jpg" alt="" />
        </div>
        <div className="">
          <p className="text-sm mt-5 mr-16 ml-5 mb-4 sm:mr-12 md:justify-items-end md:mt-[10%] md:ml-[30%] md:mr-[25%]">
            Журнал адресован преподавателям, магистрантам, исследователям,
            студентам вузов, а также всем, кто интересуется проблемами
            современной науки. К публикации принимаются статьи, в ко
            представлены основные научные результаты исследований в областях
            педагогики, психологии, техники, искусствоведения, архитектуры,
            философии, истории и филологии. Также приветствуются ст основанные
            на диссертационных работах кандидатов на ученые степени доктора
            философии (PhD) и доктора наук (DSc) в указанных областях.
          </p>
        </div>
      </div>
    </div>
  );
}
