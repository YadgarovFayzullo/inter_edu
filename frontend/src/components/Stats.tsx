import React, { useEffect, useState } from "react";

interface CountData {
  label: string;
  count: number;
  suffix: string;
}

const Counter: React.FC = () => {
  const [counts, setCounts] = useState<CountData[]>([
    { label: "Общее число просмотров", count: 0, suffix: "+" },
    { label: "Скачивания", count: 0, suffix: "+" },
    { label: "Партнеры", count: 0, suffix: "+" },
  ]);

  useEffect(() => {
    const targets = [
      { index: 0, count: 5500, suffix: "+" },
      { index: 1, count: 800, suffix: "+" },
      { index: 2, count: 20, suffix: "+" },
    ];

    const maxCount = Math.max(...targets.map((target) => target.count));

    targets.forEach((target) => {
      const duration = maxCount / 1;
      const interval = setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[target.index].count += Math.ceil(
            target.count / (duration / 10)
          );
          if (newCounts[target.index].count >= target.count) {
            clearInterval(interval);
            newCounts[target.index].count = target.count;
          }
          return newCounts;
        });
      }, 10);
    });
  }, []);

  return (
    <div>
      <div>
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-medium font-Montserrat text-gray-900 sm:text-4xl sm:leading-10">
              Статистика нашего журнала
            </h2>
            <p className="mt-3 text-xl  text-gray-600 -400 sm:mt-4">
              Наш журнал является самым быстрорастущим и развивающим в
              научно-исследоветельской сфере.
            </p>
          </div>
        </div>
        <div className="mt-10 sm:pb-16">
          <div className="relative">
            <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  {counts.map((count, index) => (
                    <div
                      key={index}
                      className={`flex flex-col p-6 text-center border-t border-gray-100  sm:border-0 ${
                        index === 2 ? "sm:border-l" : "sm:border-l sm:border-r"
                      }`}
                    >
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 ">
                        {count.label}
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold leading-none text-[#f0582f]">
                        {count.count}
                        {count.suffix}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
