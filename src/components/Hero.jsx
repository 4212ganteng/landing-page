import React from "react";
import hero from "../assets/amico.svg";
import play from "../assets/btnplay.svg";

const Hero = () => {
  return (
    <div className="w-full mt-10">
      <div className="flex justify-center ">
        <div className="flex justify-between container max-w-5xl items-center">
          <div className="w-[458px] ">
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              sed veniam et hic pariatur rerum odio fugiat ratione mollitia
              necessitatibus?
            </div>

            <div className="flex mt-5 items-center">
              <a
                className="mr-4 bg-[#02897A] px-4 py-2 rounded text-white"
                href=""
              >
                Get Started
              </a>
              <a href="">
                <img src={play} alt="" />
              </a>
            </div>
          </div>
          <div>
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
