import React from "react";

const Card = ({ details }) => {
  const { name, price, siteName, productImg, siteImg, link } = details;
  return (
    <div
      className="card bg-[#F9F6FB] rounded-lg border-[1px] shadow-md border-black max-h-[300px] min-h-[300px] flex flex-col justify-between items-center"
      style={styles.card}
    >
      <div className="flex items-center flex-col">
        <img
          src={productImg}
          alt="product"
          className="flex justify-center items-center mb-4 w-[100px] h-[150px] object-cover rounded-lg"
        />
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.price}>Price: ${price}</p>
      </div>

      <div>
        <a
          href={link}
          style={styles.siteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={siteImg} alt={siteName} style={styles.siteImg} />
          <p style={styles.siteName}>{siteName}</p>
        </a>
      </div>
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
    width: "250px",
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
