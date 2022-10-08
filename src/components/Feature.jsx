import React from "react";
import click from "../assets/click.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import bg from "../assets/Bg.png";

function Feature() {
  return (
    <div>
      <div className="container">
        <h2 className="font-bold text-[32px] mb-16 text-center">
          Product was Built Specifically <br />
          for You
        </h2>
        <img src={bg} alt="" className="absolute -z-10" />
        <div className="grid-cols-4  flex justify-center">
          <div className="ml-36">
            <img src={click} alt="" />
            <h3>First click tests</h3>
            <p>While most people enjoy casino gambling,</p>
          </div>
          <div>
            <img src={icon2} alt="" />
            <h3>Design surveys</h3>
            <p>Sports betting, lottery and bingo playing for the fun</p>
          </div>
          <div>
            <img src={icon3} alt="" />
            <h3>Preference tests</h3>
            <p>The Myspace page defines the individual.</p>
          </div>
          <div>
            <img src={icon4} alt="" />
            <h3>Five second tests</h3>
            <p>Personal choices and the overall personality of the person. </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#02897A]  px-4 py-2 text-white rounded outline-none">
            SIGN UP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
