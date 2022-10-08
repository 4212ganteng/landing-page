import React from "react";
import cs from "../assets/cs.svg";
import ctg1 from "../assets/ctg1.svg";
import ctg2 from "../assets/ctg2.svg";
import ctg3 from "../assets/ctg3.svg";

const Customer = () => {
  return (
    <div className="flex justify-center">
      <div className="container mt-20">
        <div className=" grid grid-cols-2 gap-2">
          <div className="">
            <img src={cs} alt="" />
          </div>
          <div className="max-w-md">
            <h4 className="text-base font-bold text-[#22343D]">
              Easier decision making for
            </h4>
            <h2 className="text-3xl font-bold text-[#22343D] mb-8">
              Customer Support
            </h2>
            <p className=" text-[#22343D] ">
              The Myspace page defines the individual, his or her
              characteristics, traits, personal choices and the overall
              personality of the person.
            </p>
            <ul className="mt-5">
              <li className="flex">
                <img className="mr-5 mb-5" src={ctg1} alt="" />
                <p>Never worry about overpaying for your energy again. </p>
              </li>
              <li className="flex">
                <img className="mr-5 mb-5" src={ctg2} alt="" />
                <p>
                  We will only switch you to energy companies that we trust and
                  will treat you right
                </p>
              </li>
              <li className="flex">
                <img className="mr-5" src={ctg3} alt="" />
                <p>
                  We track the markets daily and know where the savings are.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
