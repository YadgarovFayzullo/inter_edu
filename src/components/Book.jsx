import React from "react";

export default function Book() {
  return (
    <div className="container mt-44 mb-16">
      <div className="flex justify-around w-full">
        <div className="w-[20%] ml-16 shadow-lg hover:shadow-2xl duration-200">
          <img
            className='data-aos="fade-up"
            data-aos-duration="3000" '
            src="/mainbook.jpg"
            alt=""
          />
        </div>
        <div className="text-xl mt-24 body">
          <p className="font-BookText italic text-gray-600 flex justify-items-end tipo">
            Журнал адресован преподавателям, магистрантам, исследователям,
            <br />
            студентам вузов, а также всем, кто интересуется проблемами
            <br />
            современной науки. К публикации принимаются статьи, в которых <br />
            представлены основные научные результаты исследований в областях
            <br />
            педагогики, психологии, техники, искусствоведения, архитектуры,
            <br />
            философии, истории и филологии. Также приветствуются статьи, <br />
            основанные на диссертационных работах кандидатов на ученые степени
            <br />
            доктора философии (PhD) и доктора наук (DSc) в указанных областях.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
