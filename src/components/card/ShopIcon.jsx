import { ReactComponent as DefaultIcon } from "../../assets/shopIcons/common.svg";
import { ReactComponent as AmazonIcon } from "../../assets/shopIcons/amazon.svg";
import { ReactComponent as CromaIcon } from "../../assets/shopIcons/croma.svg";

const ShopIcon = ({ shopLink, shopName, style }) => {
  const getShopIcon = () => {
    if (shopName === "Amazon.in") return <AmazonIcon />;
    if (shopName === "Croma") return <CromaIcon />;
    return <DefaultIcon />;
  };

  return (
    <div>
      <a
        href={shopLink}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
      >
        {getShopIcon()}
      </a>
    </div>
  );
};

export default ShopIcon;
