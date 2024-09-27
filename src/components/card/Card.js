import React from "react";

const Card = ({ details, handleTry }) => {
  // todo: update site image and site name
  const {
    title,
    price,
    siteName,
    imgUrl,
    siteImg,
    url,
    isTryOn = true,
  } = details;
  console.log({ card: details });
  return (
    <div
      className={`card bg-[#F9F6FB] rounded-lg border-[1px] shadow-md border-black flex flex-col justify-between items-center ${
        isTryOn ? "max-h-[340px] min-h-[340px]" : "max-h-[300px] min-h-[300px]"
      }`}
      style={styles.card}
    >
      <div className="flex items-center flex-col">
        <img
          src={imgUrl}
          alt="product"
          className="flex justify-center items-center mb-4 w-[100px] h-[150px] object-cover rounded-lg"
        />
        <h2 style={styles.name}>{title}</h2>
        <p style={styles.price}>Price: ${price}</p>
      </div>

      <div>
        <a
          href={url}
          style={styles.siteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={siteImg} alt={siteName} style={styles.siteImg} />
          <p style={styles.siteName}>{siteName}</p>
        </a>
      </div>
      {isTryOn && (
        <button
          onClick={handleTry}
          className="rounded-full bg-gradient-to-bl from-[#C167F6] to-[#5548C7] text-white px-4 py-2 font-normal text-sm"
        >
          Try On
        </button>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    textAlign: "center",
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
    bottom: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#1e90ff",
    textDecoration: "none",
    marginTop: "8px",
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
