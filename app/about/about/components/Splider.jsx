"use client";
import Image from "next/image";
import React from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const Splider = () => {
  const splideOptions = {
    type: "loop",
    drag: true,
    focus: "center",
    arrows: false,
    rewind: true,
    gap: "1em",
    perPage: 3,
    direction: "ltr",
    // pauseOnHover: false,
    breakpoints: {
      1024: {
        perPage: 3,
      },
      640: {
        perPage: 2,
      },
    },
    autoScroll: {
      pauseOnHover: true,
      speed: 1,
      interval: 3000, // Set the interval for auto-scroll in milliseconds.
    },
  };
  const items = [
    {
      url: "/frame1.png",
      h2: " Empowerment",
      p: "We empower individuals to take charge of their own education, enabling them to develop critical thinking skills, enhance their,         knowledge, and become lifelong learners",
    },
    {
      url: "/frame1.png",
      h2: " Empowerment",
      p: "We empower individuals to take charge of their own education, enabling them to develop critical thinking skills, enhance their,         knowledge, and become lifelong learners",
    },
    {
      url: "/frame1.png",
      h2: " Empowerment",
      p: "We empower individuals to take charge of their own education, enabling them to develop critical thinking skills, enhance their,         knowledge, and become lifelong learners",
    },
    {
      url: "/frame1.png",
      h2: " Empowerment",
      p: "We empower individuals to take charge of their own education, enabling them to develop critical thinking skills, enhance their,         knowledge, and become lifelong learners",
    },
    {
      url: "/frame1.png",
      h2: " Empowerment",
      p: "We empower individuals to take charge of their own education, enabling them to develop critical thinking skills, enhance their,         knowledge, and become lifelong learners",
    },
    {
      url: "/frame1.png",
      h2: " Empowerment",
      p: "We empower individuals to take charge of their own education, enabling them to develop critical thinking skills, enhance their,         knowledge, and become lifelong learners",
    },
    {
      url: "/frame1.png",
      h2: " Empowerment",
      p: "We empower individuals to take charge of their own education, enabling them to develop critical thinking skills, enhance their,         knowledge, and become lifelong learners",
    },
    {
      url: "/frame1.png",
      h2: " Empowerment",
      p: "We empower individuals to take charge of their own education, enabling them to develop critical thinking skills, enhance their,         knowledge, and become lifelong learners",
    },
    {
      url: "/frame1.png",
      h2: " Empowerment",
      p: "We empower individuals to take charge of their own education, enabling them to develop critical thinking skills, enhance their,         knowledge, and become lifelong learners",
    },
    {
      url: "/frame1.png",
      h2: " Empowerment",
      p: "We empower individuals to take charge of their own education, enabling them to develop critical thinking skills, enhance their,         knowledge, and become lifelong learners",
    },
    {
      url: "/frame1.png",
      h2: " Empowerment",
      p: "We empower individuals to take charge of their own education, enabling them to develop critical thinking skills, enhance their,         knowledge, and become lifelong learners",
    },
  ];
  return (
    <div className="bg-[#cbe9fb]">
      <div className="splide h-[250px] bg-[#cbe9fb] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Splide options={splideOptions} extensions={{ AutoScroll }}>
          {items.map((item, index) => (
            <SplideSlide key={index}>
              <div className="h-full flex p-2 gap-3 bg-[#cbe9fb] py-12">
                <div className="flex translate-y-[-20px] items-center justify-start">
                  <Image
                    style={{
                      objectFit: "cover",
                    }}
                    src={item.url}
                    height={400}
                    width={400}
                    alt="logo"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <h2 class="text-[15px] sm:text-[20px] bolder font-bold">
                    {item.h2}
                  </h2>
                  <p class="text-[13px] sm:text-[16px]">{item.p}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Splider;
