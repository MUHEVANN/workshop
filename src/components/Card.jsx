import React from "react";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";
const Card = ({ color, jurusan, image, name, job, age, address, univ }) => {
  return (
    <div
      data-aos="fade-up"
      className={`bg-white   w-[350px] h-auto rounded-md shadow-md p-5 relative hover:-translate-y-2 border border-${color}-200 overflow-hidden`}
    >
      <div className="w-full h-[100px] flex justify-center">
        <img
          src={image}
          alt=""
          className="w-[100px] h-[100px] z-20 object-cover bg-center rounded-full"
        />
      </div>
      <div
        className={`w-[350px] h-[600px] shadow-md ${color} -top-[35%] -left-[32%] absolute rotate-[50deg] z-[0]`}
      />
      <div className="flex flex-col gap-y-5 mt-2 z-20">
        <div className="text-center z-20">
          <h1 className="font-bold text-xl">{name}</h1>
          <h1 className="text-sm text-gray-400">{job}</h1>
        </div>
        <div className="z-20">
          <h1 className="flex justify-between">
            Umur: <span>{age} Tahun</span>
          </h1>
          <h1 className="flex justify-between">
            Alamat: <span>{address}</span>
          </h1>
          <h1 className="flex justify-between">
            Universitas : <span>{univ}</span>
          </h1>
          <h1 className="flex justify-between">
            Jurusan :<span>{jurusan}</span>
          </h1>
        </div>
        <div className="z-20">
          <h1>Desc</h1>
          <p className="text-center z-20">
            Hallo saya adalah mahasiswa dari {univ} yang bercita-cita menjadi{" "}
            {job}
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Button text="Learn More" bg="bg-blue-200" />
        </div>
      </div>
    </div>
  );
};
AOS.init();

export default Card;
