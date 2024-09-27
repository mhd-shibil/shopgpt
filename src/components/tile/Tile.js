import { useState } from "react";

import arrow from "../../assets/arrow-up-right.svg";

const Tile = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full h-full rounded-lg bg-[#F9F5FC] flex justify-center items-center shadow-lg border relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={data.productImg}
        alt="product"
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
          isHovered ? "opacity-50" : "opacity-100"
        }`}
      />

      {isHovered && (
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-10 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-black">{data.name}</h3>
          <p className="text-sm my-2 text-black">${data.price}</p>
          <img
            src={arrow}
            onClick={() => window.open(data.link, "_blank")}
            alt="link"
            className="cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default Tile;
