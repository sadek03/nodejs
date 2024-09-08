import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Splider from "./components/Splider";
import CEO from "./components/CEO";
import Instructors from "./components/Instructors";

const About = () => {
  return (
    <>
      <div className="w-full bg-[#cbe9fb] pl-[126px] pr-[130px] pt-6">
        <div className="h-full bg-gradient-to-b from-[#e8f3fbe2] to-[#e8f1fb16] rounded-xl px-8 pt-8 space-y-8">
          <div className="flex gap-5">
            <div>
              <image src={"/frame1.pmg"} height={500} width={500} />
            </div>
            <div className="translate-y-[-8px]">
              <h1 className="text-[35px] font-bold bg-gradient-to-r from-[#3a48c5] to-[#000507] text-transparent bg-clip-text">
                About Scordemy
              </h1>
              <h2 className=" font-normal">
                Welcome to Scordemy, your go-to destination for quality
                education in regional <br /> languages. As an innovative Edtech
                platform, we are dedicated to providing <br /> comprehensive
                learning by solutions for both schools and competitive exams
                like <br /> APSC, UPSC, WBPSC, SSC, Banking, Railways, TET, JEE
                &NEET etc.
              </h2>
              <h2 className="pt-5 pb-3">
                Our mission is to bridge the language gap in education and
                empower students with <br /> knowledge and skills in their
                native language.
              </h2>
              <Button className="bg-[#3a48c6] border border-[3px] border-[#fff] hover:bg-[#3a48c6] py-6 px-8 text-md rounded-full transition-all duration-500 hover:scale-105 flex items-center justify-center tracking-wider">
                Explore Course
              </Button>
            </div>
          </div>
          <div className="h-[200px] w-full bg-[#e9f5fc] rounded-xl flex items-center justify-center px-6 border border-[5px] border-[#bee0f5]">
            <image src={"/frame1.pmg"} height={150} width={150} alt="logo" />
            <div className="pl-4 space-y-2">
              <h1 className="text-[30px] font-bold text-[#3344b5]">
                Our Mission
              </h1>
              <h2 className="text-[16px] font-medium">
                To provide accessible and high-quality education through our
                regional language teaching methodology, empowering individuals
                to achieve their ful potential and contribute to the development
                of our society.
              </h2>
            </div>
          </div>
          <div className="h-[200px] w-full bg-[#e9f5fc] rounded-xl flex items-center justify-center px-6 border border-[5px] border-[#bfdff3]">
            <Image src={"/frame1.pmg"} height={150} width={150} alt="logo" />
            <div className="pl-4">
              <h1 className="text-[30px] font-bold text-[#3344b5]">
                Our Vision
              </h1>
              <h2 className="text-[16px] font-medium">
                To be the leading Edtech company in India, revolutionizing
                regional language education by leveraging technology and
                innovative teaching methods to bridge the gap between
                traditional and modern learning approaches.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Splider />
      <CEO />
      <Instructors />
    </>
  );
};

export default About;
