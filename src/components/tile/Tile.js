import { useState } from "react";
import { motion } from "framer-motion";
import arrow from "../../assets/arrow-up-right.svg";

const Tile = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full h-full rounded-lg flex justify-center items-center shadow-lg border relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        y: [0, -200, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
      }}
    >
      <img
        src={data.productImg}
        alt="product"
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
          isHovered ? "opacity-50 blur-sm" : "opacity-100"
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
    </motion.div>
  );
};

export default Tile;
