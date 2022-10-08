import React from "react";
import manage from "../assets/manage.svg";

const Management = () => {
  return (
    <div className="container mt-64">
      <div class=" grid-cols-3 gap-4 flex justify-center">
        <div className="max-w-[486px] mr-7">
          <h3 className="font-bold  text-[#22343D] mb-3">
            Effortless Validation for
          </h3>
          <h1 className="font-bold text-3xl text-[#22343D] mb-7">Management</h1>
          <p className="mb-3  text-[#22343D]">
            The Myspace page defines the individual, his or her characteristics,
            traits, personal choices and the overall personality of the person.
          </p>

          <div className="mt-7">
            <h3 className="font-bold  text-[#22343D] mb-3">Accessory makers</h3>
            <p>
              While most people enjoy casino gambling, sports betting, lottery
              and bingo playing for the fun
            </p>
          </div>
          <div className="mt-7">
            <h3 className="font-bold  text-[#22343D] mb-3">Alterationists</h3>
            <p>
              If you are looking for a new way to promote your business that
              won’t cost you more money,{" "}
            </p>
          </div>
        </div>
        <div class="...">
          <img src={manage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Management;
