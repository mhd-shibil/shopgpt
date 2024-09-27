import { motion } from "framer-motion";
import arrow from "../../assets/arrow-up-right.svg";
import { useState } from "react";

const Tile = ({ data, isAnyTileHovered, setIsAnyTileHovered }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="w-full h-full rounded-lg flex justify-center items-center shadow-lg border relative overflow-hidden"
      onMouseEnter={() => {
        setIsAnyTileHovered(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsAnyTileHovered(false);
        setIsHovered(false);
      }}
      animate={
        !isAnyTileHovered
          ? {
              y: [0, -100, 0], // Animation when no tile is hovered
            }
          : {
              y: 0, // Stop animation for all tiles when any one is hovered
            }
      }
      transition={{
        duration: 10, // Duration of one full cycle of animation
        repeat: isAnyTileHovered ? 0 : Infinity, // Stop repeating when any tile is hovered
        repeatType: "mirror", // Animation reverses direction each cycle
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
