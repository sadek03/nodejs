import Image from "next/image";
import React from "react";

const CEO = () => {
  return (
    <div className="bg-[#cbe9fb] pl-[126px] pr-[130px] pt-5 pb-5">
      <div className="bg-[#d9effc] h-[450px] rounded-xl flex flex-col items-center pt-7 relative">
        <div className="absolute right-[20px] top-[20px] opacity-70">
          <image src={"/frame1.png"} height={100} width={100} />
        </div>
        <h1 className="text-[40px] text-[#223989] font-bold">CEO Desk</h1>
        <div className="flex gap-5 px-[30px] pt-10 justify-center">
          <div className="flex items-center justify-center w-[300px] bg-[#d9effc] shrink-0 rounded-lg">
            <image
              // style={{ objectFit: "" }}
              src={"/frame1.png"}
              height={500}
              width={500}
              className="rounded-md h-[300px] w-[270px]"
            />
          </div>
          <div>
            <h2 className="font-medium">Dear Learners,</h2>
            <p className="pb-3">
              I am thrilled to welcome you to Scordemy, an innovative online
              learning platform that aims to revolutionize education and empower
              learners worldwide. As the founder of Scordemy, I am passionate
              about providing high-quality, accessible, and personalized
              education through the use of cutting-edge technology.
            </p>
            <p>
              Scordemy is committed to upholding the highest ethical standards
              and transparency in all our interactions. We are continuously
              striving to improve and enhance the learning experience through
              technological advancements. We are proud of our achievements and
              milestones, including reaching 50,000 registered learners within
              the first six months of operation. Looking ahead, we have exciting
              plans for the future of Scordemy.
            </p>
            <h1 className="text-[20px] mt-3 leading-tight  sm:text-[23px] font-bold bolder text-transparent bg-clip-text bg-gradient-to-r from-[#3A48C6] to-[#03263C]">
              Mr. Matiar Rahman
            </h1>
            <h3 className="font-bold">CEO & Founder</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEO;
