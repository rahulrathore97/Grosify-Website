import React from "react";
import Heading from "../heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShareAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const leftvalues = Value.slice(0, 2).map((item) => {
    return (
      <div key={item.id} className="flex md:flex-row-reverse items-center gap-7">
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>
        <div className="md:text-right">
          <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  const rightvalues = Value.slice(2).map((item) => {
    return (
      <div key={item.id} className="flex items-center gap-7 ">
        <div>
          <span className="flex justify-center items-center text-2xl md:text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>

        <div>
          <h3 className="text-zinc-800 md:text-3xl text-2xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto p-10 "></div>
      <Heading highlight="Our" heading="Values" />

      <div className="flex md:flex-row md:gap-5 gap-15 flex-col gap-10 mt-5">
        {/* Left Values */}
        <div className="md:min-h-100 md:items-end gap-15 flex flex-col justify-between">
          {leftvalues}
        </div>

        {/* Middle Images */}
        <div className="md:flex w-1/2 hidden">
          <img src={Basket} alt="" />
        </div>

        {/* Right Values */}
        <div className="md:min-h-100 gap-15 flex flex-col gap-8 justify-between">
          {rightvalues}
        </div>
      </div>
    </section>
  );
};

export default Values;

const Value = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "It is a long established fact that a reader will be distracted by the readable",
    icon: <FaShareAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "It is a long established fact that a reader will be distracted by the readable",
    icon: <FaSeedling />,
  },
];
