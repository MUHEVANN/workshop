import React from "react";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="w-[500px] h-auto p-5 border-2 shadow-sm rounded-md">
        <h1 className="font-bold text-center text-xl">Login</h1>
        <form action="" className="flex flex-col gap-3 mt-5 ">
          <div className="flex flex-col gap-3">
            <label htmlFor="">Nama</label>
            <input
              type="text"
              className="py-2 px-2 border rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="py-2 px-2 border rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Password</label>
            <input
              type="Password"
              className="py-2 px-2 border rounded-md outline-none"
            />
          </div>
          <p className="text-right">forgot password?</p>
          <div className="mt-5">
            <button className="py-2 px-6 bg-blue-200 rounded-md">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
