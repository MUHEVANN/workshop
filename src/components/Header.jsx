import React from "react";
import amikom from "../assets/amikom.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div
      data-aos="fade-up"
      className="w-full flex flex-col justify-center items-center gap-5  h-auto  px-[80px]"
    >
      <h1 className="text-xl text-center  font-bold">Home</h1>
      <img src={amikom} alt="" className="w-[200px] h-[200px]" />
      <p className="max-w-[500px] text-center">
        Hallo Selamat datang, dihalaman web amikom workshop 2023 Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Recusandae, id. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quisquam, sed?
      </p>
      <div className="flex gap-x-5">
        <Link
          to={"/"}
          className="px-6 py-2 border-2 rounded-md border-blue-200 hover:px-8 hover:bg-blue-300 hover:border-none "
        >
          Register
        </Link>
        <Link
          className="px-6 py-2 bg-blue-300 rounded-md text-white hover:px-8"
          to={"login"}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
