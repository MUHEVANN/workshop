import React from "react";
import { datas } from "../data/dummy";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";
const Gallery = () => {
  return (
    <div className="inline-flex gap-3 w-full justify-center flex-wrap mt-5">
      {datas.map((item) => {
        return (
          <Card
            key={item.id}
            color={item.color}
            jurusan={item.jurusan}
            univ={item.univ}
            address={item.address}
            age={item.age}
            job={item.job}
            name={item.name}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
