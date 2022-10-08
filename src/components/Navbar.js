import React from "react";
import logo from "../assets/rizalganteng.svg";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center ">
        <div className="container max-w-5xl">
          <nav>
            <div className=" flex justify-between mt-4">
              <a href="">
                <img src={logo} alt="" />
              </a>
              <ul className="flex items-center">
                <li className="mr-4">
                  <a href="#">Product</a>
                </li>
                <li className="mr-4">
                  <a href="#">Customers</a>
                </li>
                <li className="mr-4">
                  <a href="#">Pricing</a>
                </li>
                <li className="mr-4">
                  <a href="#">Resource</a>
                </li>
                <li className="mr-4">
                  <a
                    className="border px-4 py-2 rounded-md text-[#173A56]  "
                    href="#"
                  >
                    Sign In
                  </a>
                </li>
                <li className="mr-4 bg-[#02897A] px-4 py-2 rounded-md text-white">
                  <a href="#">Sign Up</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
