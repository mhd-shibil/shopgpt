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
              y: [0, -40, 0], // Animation when no tile is hovered
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
      {data.type === "video" ? (
        <video
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 object-top ${
            isHovered ? "opacity-50 blur-sm" : "opacity-100"
          }`}
          poster={data.productImg}
          autoPlay
          muted
        >
          <source src={data.videoLink} type="video/mp4" />
        </video>
      ) : (
        <img
          src={data.productImg}
          alt="product"
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 object-top ${
            isHovered ? "opacity-40 blur-sm" : "opacity-100"
          }`}
        />
      )}

      {isHovered && (
        <div
          className="cursor-pointer absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-10 p-4 rounded-lg"
          onClick={() => window.open(data.link, "_blank")}
        >
          <h3 className="text-lg font-bold text-black">{data.name}</h3>
          <p className="text-sm my-2 text-black">${data.price}</p>
          <img src={arrow} alt="link" />
        </div>
      )}

      {/* Discount Tag */}
      {data.discount && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-lg font-bold">
          {data.discount}% OFF
        </div>
      )}
    </motion.div>
  );
};

export default Tile;
