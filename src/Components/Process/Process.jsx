import React from "react";
import Heading from "../heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlantDuotone } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Process = () => {
  const rendersteps = steps.map((item) => {
    return (
      <div
       key={item.id} 
        className={`flex-1 basis[300px]  ${
          item.id % 2 === 0 ? "md:-mt-90" : ""
        }`}
      >
        <span className="flex md:w-14 w-12 h-12 md:h-14 mx-auto md:text-8xl text-5xl bg-zinc-800 text-white rounded-full justify-center items-center outline-dashed">
          {item.number}
        </span>

        <div className="flex mt-5 gap-x-5">
          <div className="flex items-center ">
            <span className="flex bg-gradient-to-b from-orange-400 to-orange-500 text-white md:w-13 w-11 h-11 md:h-13 rounded-full justify-center items-center text-3xl">
              {item.icon}
            </span>
          </div>

          <div className="flex-1">
            <h4 className="text-zinc-800 md:text-2xl text-xl font-bold">
              {item.title}
            </h4>
            <p className="text-zinc-600 mt-2">{item.para}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="process">
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="w-fit">
          <Heading highlight="Our" heading="Process" />
        </div>

        <div className="flex gap-y-10 flex-wrap items-center justify-center md:mt-20 mt-10 md:pt-45">
          {rendersteps}
        </div>
      </div>
    </section>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlantDuotone />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />,
  },
];
