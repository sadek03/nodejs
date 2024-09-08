"use client";
import Image from "next/image";
import React from "react";

const Instructors = () => {
  const items = [
    {
      url: "/frame1.png",
      state: "SOUMEN SIR",
      language: "Teacher",
    },
    {
      url: "/frame1.png",
      state: "SOUMEN SIR",
      language: "Teacher",
    },
    {
      url: "/frame1.png",
      state: "SOUMEN SIR",
      language: "Teacher",
    },
    {
      url: "/frame1.png",
      state: "SOUMEN SIR",
      language: "Teacher",
    },
    {
      url: "/frame1.png",
      state: "SOUMEN SIR",
      language: "Teacher",
    },
    {
      url: "/frame1.png",
      state: "SOUMEN SIR",
      language: "Teacher",
    },
    {
      url: "/frame1.png",
      state: "SOUMEN SIR",
      language: "Teacher",
    },
    {
      url: "/frame1.png",
      state: "SOUMEN SIR",
      language: "Teacher",
    },
    {
      url: "/frame1.png",
      state: "SOUMEN SIR",
      language: "Teacher",
    },
    {
      url: "/frame1.png",
      state: "SOUMEN SIR",
      language: "Teacher",
    },
    {
      url: "/frame1.png",
      state: "SOUMEN SIR",
      language: "Teacher",
    },
    {
      url: "/frame1.png",
      state: "SOUMEN SIR",
      language: "Teacher",
    },
    {
      url: "/frame1.png",
      state: "SOUMEN SIR",
      language: "Teacher",
    },
  ];
  return (
    <div className="bg-[#cbe9fb] pl-[126px] pr-[130px] pt-5 pb-5">
      <div className="h-full bg-[#d9effc] rounded-xl pb-5">
        <h1 className="text-[40px] font-bold text-center pt-6 text-transparent bg-clip-text bg-gradient-to-r from-[#3A48C6] to-[#03263C]">
          Our Instructors
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-8 pt-5">
          {items.map((item, index) => (
            <div
              className="h-[350px] w-[300px] bg-[#edf5fa] rounded-xl flex flex-col items-center justify-center"
              key={index}
            >
              <div>
                <Image
                  src={item.url}
                  height={250}
                  width={250}
                  alt="logo"
                  className="rounded-xl"
                />
              </div>
              <div className="pt-3">
                <h1 className="font-bold text-black">{item.state}</h1>
                <h1 className="text-center text-black">{item.language}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
