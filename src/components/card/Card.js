import React from "react";
import ShopIcon from "./ShopIcon";

const Card = ({ details, handleTry }) => {
  const { title, price, imgUrl, url, discount = "", type, store } = details;

  return (
    <div
      className={`card bg-[#F9F6FB] rounded-lg border-[1px] shadow-md border-black flex flex-col justify-between items-center pb-4 ${
        type === "Fashion" ? "h-full min-h-[340px]" : "h-full min-h-[300px]"
      }`}
      style={styles.card}
      role="presentation"
      onClick={window.open(url, "_blank")}
    >
      <div className="flex items-start text-start flex-col w-full">
        <img
          src={imgUrl}
          alt="product"
          className="flex justify-center items-center mb-4 w-full h-[180px] object-cover object-top rounded-lg"
        />
        <div className="text-[#303030] font-medium text-sm mx-2 ellipsis-2-lines">
          {title}
        </div>
        <div className="text-[#303030] font-bold text-sm mx-2 mt-1">
          {price}
        </div>
      </div>

      <div className="w-full items-center justify-center">
        <ShopIcon shopLink={url} style={styles.siteLink} shopName={store} />
        {type === "Fashion" && (
          <button
            onClick={() => handleTry(imgUrl)}
            className="mt-2 rounded-full bg-gradient-to-bl from-[#C167F6] to-[#5548C7] text-white px-8 py-1 font-normal text-sm"
          >
            Try On
          </button>
        )}
      </div>

      {/* Discount Tag */}
      <div
        className={`absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded ${
          discount ? "" : "hidden"
        }`}
      >
        {discount}% OFF
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    margin: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    textAlign: "center",
    position: "relative", // Needed for absolute positioning of the discount tag
  },
  name: {
    margin: "0 0 8px",
    overflow: "hidden",
    maxWidth: "160px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  price: {
    margin: "0 0 8px",
    color: "#333",
  },
  siteLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#1e90ff",
    textDecoration: "none",
  },
  siteImg: {
    width: "24px",
    height: "24px",
    marginRight: "8px",
    borderRadius: "50%",
  },
  siteName: {
    fontSize: "14px",
    margin: 0,
    color: "#1e90ff",
  },
};

export default Card;
